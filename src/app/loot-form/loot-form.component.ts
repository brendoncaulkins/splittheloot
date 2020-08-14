import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { initialLoot } from '../models/loot.model'
import { LootService } from '../services/loot/loot.service'

@Component({
  selector: 'app-loot-form',
  templateUrl: './loot-form.component.html',
  styles: [
    `
      mat-form-field {
        width: 100%;
        text-align: right;
      }
    `,
  ],
})
export class LootFormComponent {
  formGroup: FormGroup

  constructor(private lootService: LootService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      platinum: [0, [Validators.min(0)]],
      gold: [0, [Validators.min(0)]],
      silver: [0, [Validators.min(0)]],
      copper: [0, [Validators.min(0)]],
    })
    this.formGroup.patchValue(initialLoot)

    this.formGroup.valueChanges.subscribe((loot) => this.lootService.setLoot(loot))
  }

  hasError(control: string, errorName: string): boolean {
    return this.formGroup?.get(control)?.hasError(errorName)
  }
}
