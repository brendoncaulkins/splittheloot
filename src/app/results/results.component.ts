import { Component } from '@angular/core'
import { Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

import { ILoot } from '../models/loot.model'
import { IResults } from '../models/results.model'
import { ISettings } from '../models/settings.model'
import { LootService } from '../services/loot/loot.service'
import { SettingsService } from '../services/settings/settings.service'

export const noLoot: ILoot = {
  platinum: 0,
  gold: 0,
  silver: 0,
  copper: 0,
}

export function convertToGold(loot: ILoot): ILoot {
  // First, convert copper to silver
  const remainingCopper = loot.copper % 10
  const copperToSilver = (loot.copper - remainingCopper) / 10

  // Then, convert silver to gold
  const remainingSilver = (loot.silver + copperToSilver) % 10
  const silverToGold = (loot.silver + copperToSilver - remainingSilver) / 10

  // Finally, convert platinum down to gold
  return {
    platinum: 0,
    gold: loot.gold + loot.platinum * 10 + silverToGold,
    silver: remainingSilver,
    copper: remainingCopper,
  }
}

export function calculateLeftOver(loot: ILoot, divisor: number): ILoot {
  return {
    platinum: loot.platinum % divisor,
    gold: loot.gold % divisor,
    silver: loot.silver % divisor,
    copper: loot.copper % divisor,
  }
}

export function calculatePercentage(loot: ILoot, percentage: number): ILoot {
  // Use percentage to approximate a party, cheat with party member share calculation
  const factor = Math.floor(100 / percentage)
  return calculateShare(loot, factor)
}

export function calculateShare(loot: ILoot, partySize: number): ILoot {
  const remainder = calculateLeftOver(loot, partySize)
  return {
    platinum: (loot.platinum - remainder.platinum) / partySize,
    gold: (loot.gold - remainder.gold) / partySize,
    silver: (loot.silver - remainder.silver) / partySize,
    copper: (loot.copper - remainder.copper) / partySize,
  }
}

export function calculateResults(origLoot: ILoot, settings: ISettings): IResults {
  const loot = settings.convertToGold ? convertToGold(origLoot) : origLoot
  const showParty = settings.partyPercentage > 0
  const partyShare = showParty
    ? calculatePercentage(loot, settings.partyPercentage)
    : noLoot

  const remainder: ILoot = {
    platinum: loot.platinum - partyShare.platinum,
    gold: loot.gold - partyShare.gold,
    silver: loot.silver - partyShare.silver,
    copper: loot.copper - partyShare.copper,
  }
  return {
    showParty,
    partyShare,
    partyMemberShare: calculateShare(remainder, settings.partySize),
    leftOver: calculateLeftOver(remainder, settings.partySize),
  }
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  loot$: Observable<ILoot>
  settings$: Observable<ISettings>

  results$: Observable<IResults>

  constructor(
    private lootService: LootService,
    private settingsService: SettingsService
  ) {
    this.loot$ = this.lootService.current$
    this.settings$ = this.settingsService.current$

    this.results$ = combineLatest([this.loot$, this.settings$]).pipe(
      map(([loot, settings]: [ILoot, ISettings]) => calculateResults(loot, settings))
    )
  }
}
