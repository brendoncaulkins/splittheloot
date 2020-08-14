import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { ILoot, initialLoot } from '../../models/loot.model'

@Injectable()
export class LootService {
  private cache$: BehaviorSubject<ILoot>
  current$: Observable<ILoot>

  constructor() {
    this.cache$ = new BehaviorSubject<ILoot>(initialLoot)
    this.current$ = this.cache$.asObservable()
  }

  setLoot(newLoot: ILoot): void {
    this.cache$.next(newLoot)
  }
}
