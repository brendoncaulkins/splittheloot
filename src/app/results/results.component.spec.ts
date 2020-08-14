import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { DisplayLootComponent } from '../display-loot/display-loot.component'
import { MaterialModule } from '../material.module'
import { LootService } from '../services/loot/loot.service'
import { SettingsService } from '../services/settings/settings.service'
import { ResultsComponent, convertToGold } from './results.component'

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
})
