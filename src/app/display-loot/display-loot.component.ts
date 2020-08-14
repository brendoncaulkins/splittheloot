import { Component, Input } from '@angular/core'

import { ILoot, initialLoot } from '../models/loot.model'

@Component({
  selector: 'app-display-loot',
  templateUrl: './display-loot.component.html',
  styles: [],
})
export class DisplayLootComponent {
  @Input() loot: ILoot = initialLoot
  constructor() {}
}
