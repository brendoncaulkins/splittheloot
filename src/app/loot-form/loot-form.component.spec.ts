import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { noLoot } from '../results/results.component'
import { LootService } from '../services/loot/loot.service'
import { LootFormComponent } from './loot-form.component'

describe('LootFormComponent', () => {
  let component: LootFormComponent
  let fixture: ComponentFixture<LootFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LootFormComponent],
      imports: [MaterialModule, ReactiveFormsModule, NoopAnimationsModule],
      providers: [LootService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LootFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('form validations', () => {
    it('should have platinum, gold, silver, and copper controls', () => {
      expect(component.formGroup.contains('platinum')).toBe(true)
      expect(component.formGroup.contains('gold')).toBe(true)
      expect(component.formGroup.contains('silver')).toBe(true)
      expect(component.formGroup.contains('copper')).toBe(true)
    })
    it('should initialize correctly', () => {
      expect(component.formGroup.value).toEqual(noLoot)
    })
    it('should not allow negative values', () => {
      component.formGroup.patchValue({ platinum: -1, gold: -1, silver: -1, copper: -1 })
      expect(component.hasError('platinum', 'min')).toBe(true)
      expect(component.hasError('gold', 'min')).toBe(true)
      expect(component.hasError('silver', 'min')).toBe(true)
      expect(component.hasError('copper', 'min')).toBe(true)
    })
  })
})
