import { TestBed } from '@angular/core/testing'
import { filter } from 'rxjs/operators'

import { LootService } from './loot.service'

describe('LootService', () => {
  let service: LootService

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LootService] })
    service = TestBed.inject(LootService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('current', () => {
    it('should broadcast the current settings to new subscribers', (done) => {
      const loot = { platinum: 100, gold: 1000, silver: 10, copper: 500 }
      service.setLoot(loot)

      service.current$.subscribe((data) => {
        expect(data).toEqual(loot)
        done()
      })
    })
  })

  describe('setLoot', () => {
    it('should cache the new loot data and bradcast via .current', (done) => {
      const loot = { platinum: 100, gold: 1000, silver: 10, copper: 500 }

      // Filter out the initial data broadcast of default data on subscribe
      service.current$.pipe(filter((data) => data.platinum !== 0)).subscribe((data) => {
        expect(data).toEqual(loot)
        done()
      })

      service.setLoot(loot)
    })
  })
})
