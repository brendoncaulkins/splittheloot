import { TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { DisplayLootComponent } from './display-loot/display-loot.component'
import { LootFormComponent } from './loot-form/loot-form.component'
import { MaterialModule } from './material.module'
import { ResultsComponent } from './results/results.component'
import { LootService } from './services/loot/loot.service'
import { SettingsService } from './services/settings/settings.service'
import { SettingsFormComponent } from './settings-form/settings-form.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MaterialModule,
      ],
      declarations: [
        AppComponent,
        DisplayLootComponent,
        LootFormComponent,
        ResultsComponent,
        SettingsFormComponent,
      ],
      providers: [LootService, SettingsService],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
