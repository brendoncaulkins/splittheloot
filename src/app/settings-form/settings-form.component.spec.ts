import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { initialSettings } from '../models/settings.model'
import { SettingsService } from '../services/settings/settings.service'
import { SettingsFormComponent } from './settings-form.component'

describe('SettingsFormComponent', () => {
  let component: SettingsFormComponent
  let fixture: ComponentFixture<SettingsFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsFormComponent],
      imports: [MaterialModule, ReactiveFormsModule, NoopAnimationsModule],
      providers: [SettingsService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('form validations', () => {
    it('should have partyPercentage, partySize, and convertToGold controls', () => {
      expect(component.formGroup.contains('partyPercentage')).toBe(true)
      expect(component.formGroup.contains('partySize')).toBe(true)
      expect(component.formGroup.contains('convertToGold')).toBe(true)
    })
    it('should initialize correctly', () => {
      expect(component.formGroup.value).toEqual(initialSettings)
    })
    it('should not allow negative values', () => {
      component.formGroup.patchValue({
        partyPercentage: -1,
        partySize: -1,
        convertToGold: false,
      })
      expect(component.hasError('partyPercentage', 'min')).toBe(true)
      expect(component.hasError('partySize', 'min')).toBe(true)
    })
    it('should not allow a partyPercentage over 100%', () => {
      component.formGroup.get('partyPercentage').setValue(101)
      expect(component.hasError('partyPercentage', 'max')).toBe(true)
    })
    it('should not allow a partySize over 10', () => {
      component.formGroup.get('partySize').setValue(11)
      expect(component.hasError('partySize', 'max')).toBe(true)
    })
  })
})
