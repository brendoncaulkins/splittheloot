import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
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
})
