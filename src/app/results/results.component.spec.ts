import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { DisplayLootComponent } from '../display-loot/display-loot.component'
import { MaterialModule } from '../material.module'
import { ILoot } from '../models/loot.model'
import { LootService } from '../services/loot/loot.service'
import { SettingsService } from '../services/settings/settings.service'
import {
  ResultsComponent,
  calculateLeftOver,
  calculateResults,
  calculateShare,
  convertToGold,
  noLoot,
} from './results.component'

describe('ResultsComponent', () => {
  let component: ResultsComponent
  let fixture: ComponentFixture<ResultsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsComponent, DisplayLootComponent],
      imports: [MaterialModule, NoopAnimationsModule],
      providers: [LootService, SettingsService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('convertToGold', () => {
    it('should convert copper to silver', () => {
      const copper = { platinum: 0, gold: 0, silver: 0, copper: 10 }
      const silver = { platinum: 0, gold: 0, silver: 1, copper: 0 }
      expect(convertToGold(copper)).toEqual(silver)
    })

    it('should convert silver to gold', () => {
      const silver = { platinum: 0, gold: 0, silver: 10, copper: 0 }
      const result = { platinum: 0, gold: 1, silver: 0, copper: 0 }
      expect(convertToGold(silver)).toEqual(result)
    })

    it('should convert silver and copper to gold', () => {
      const silverAndCopper = { platinum: 0, gold: 0, silver: 9, copper: 10 }
      const result = { platinum: 0, gold: 1, silver: 0, copper: 0 }
      expect(convertToGold(silverAndCopper)).toEqual(result)
    })

    it('should convert platinum to gold', () => {
      const platinum = { platinum: 1, gold: 0, silver: 0, copper: 0 }
      const result = { platinum: 0, gold: 10, silver: 0, copper: 0 }
      expect(convertToGold(platinum)).toEqual(result)
    })

    it('should convert everything to gold', () => {
      const platinum = { platinum: 1, gold: 4, silver: 8, copper: 20 }
      const result = { platinum: 0, gold: 15, silver: 0, copper: 0 }
      expect(convertToGold(platinum)).toEqual(result)
    })

    it('should leave leftovers', () => {
      const platinum = { platinum: 1, gold: 4, silver: 9, copper: 24 }
      const gold = { platinum: 0, gold: 15, silver: 1, copper: 4 }
      expect(convertToGold(platinum)).toEqual(gold)
    })
  })

  describe('calculateLeftOver', () => {
    it('should correctly calculate the remainder', () => {
      const total = { platinum: 57, gold: 26, silver: 102, copper: 6 }
      const remainder = { platinum: 2, gold: 1, silver: 2, copper: 1 }
      expect(calculateLeftOver(total, 5)).toEqual(remainder)
    })

    it('should return zero when the number is evenly divisible', () => {
      const total = { platinum: 55, gold: 25, silver: 100, copper: 5 }
      const remainder = { platinum: 0, gold: 0, silver: 0, copper: 0 }
      expect(calculateLeftOver(total, 5)).toEqual(remainder)
    })
  })

  describe('calculateShare', () => {
    it('should correctly calculate the share', () => {
      const total = { platinum: 57, gold: 26, silver: 102, copper: 6 }
      const remainder = { platinum: 11, gold: 5, silver: 20, copper: 1 }
      expect(calculateShare(total, 5)).toEqual(remainder)
    })

    it('should return zero when the number is evenly divisible', () => {
      const total = { platinum: 55, gold: 25, silver: 100, copper: 5 }
      const remainder = { platinum: 11, gold: 5, silver: 20, copper: 1 }
      expect(calculateShare(total, 5)).toEqual(remainder)
    })
  })

  describe('calculateResults', () => {
    let total: ILoot

    beforeEach(() => {
      total = { platinum: 1305, gold: 20144, silver: 5661, copper: 651 }
    })

    it("should verify Laura's calculation in S2E106", () => {
      const share = { platinum: 163, gold: 2518, silver: 707, copper: 81 }
      const leftOver = { platinum: 1, gold: 0, silver: 5, copper: 3 }
      const settings = { partyPercentage: 0, convertToGold: false, partySize: 8 } // Mighty Nein (7) + Vilya
      expect(calculateResults(total, settings)).toEqual({
        showParty: false,
        partyShare: noLoot,
        partyMemberShare: share,
        leftOver,
      })
    })

    it('should properly calculate with a party percentage payout', () => {
      // If they had given half to the village...
      const settings = { partyPercentage: 50, convertToGold: false, partySize: 8 } // Mighty Nein (7) + Vilya
      const leftOver = { platinum: 5, gold: 0, silver: 7, copper: 6 }
      const village = { platinum: 652, gold: 10072, silver: 2830, copper: 325 }
      const share = { platinum: 81, gold: 1259, silver: 353, copper: 40 }
      expect(calculateResults(total, settings)).toEqual({
        showParty: true,
        partyShare: village,
        partyMemberShare: share,
        leftOver,
      })
    })

    it('should properly convert everything to gold if asked', () => {
      // If they had given half to the village...
      const settings = { partyPercentage: 50, convertToGold: true, partySize: 8 } // Mighty Nein (7) + Vilya
      const leftOver = { platinum: 0, gold: 3, silver: 3, copper: 1 }
      const village = { platinum: 0, gold: 16883, silver: 3, copper: 0 }
      const share = { platinum: 0, gold: 2110, silver: 0, copper: 0 }
      expect(calculateResults(total, settings)).toEqual({
        showParty: true,
        partyShare: village,
        partyMemberShare: share,
        leftOver,
      })
    })
  })
})
