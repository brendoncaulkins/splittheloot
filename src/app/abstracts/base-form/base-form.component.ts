import { FormGroup } from '@angular/forms'

export abstract class BaseFormComponent {
  formGroup: FormGroup

  abstract buildForm(): FormGroup

  hasError(control: string, errorName: string): boolean {
    return this.formGroup?.get(control)?.hasError(errorName)
  }
}
