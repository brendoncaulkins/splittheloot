import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { initialSettings } from '../models/settings.model'
import { SettingsService } from '../services/settings/settings.service'

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styles: [
    `
      mat-form-field {
        width: 100%;
        text-align: right;
      }
    `,
  ],
})
export class SettingsFormComponent {
  formGroup: FormGroup

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      partyPercentage: [0, [Validators.min(0), Validators.max(100)]],
      partySize: [5, [Validators.min(1), Validators.max(10)]],
      convertToGold: [false, []],
    })
    this.formGroup.patchValue(initialSettings)

    this.formGroup.valueChanges.subscribe((settings) =>
      this.settingsService.updateSettings(settings)
    )
  }

  hasError(control: string, errorName: string): boolean {
    return this.formGroup?.get(control)?.hasError(errorName)
  }
}
