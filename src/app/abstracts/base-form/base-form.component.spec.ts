import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { BaseFormComponent } from './base-form.component'

// Example implementation
class TestFormComponent extends BaseFormComponent {
  constructor(private formBuilder: FormBuilder) {
    super()
    this.formGroup = this.buildForm()
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
    })
  }
}

describe('BaseFormComponent', () => {
  let component: BaseFormComponent

  beforeEach(() => {
    component = new TestFormComponent(new FormBuilder())
  })

  it('should have a formGroup', () => {
    expect(component.formGroup).toBeDefined()
  })

  it('should require an implementation of buildForm()', () => {
    expect(component.buildForm).toBeDefined()
    expect(component.buildForm() instanceof FormGroup).toBe(true)
  })

  describe('hasError()', () => {
    it('should return true if the form control has the requested error', () => {
      expect(component.hasError('name', 'required')).toBe(true)
    })

    it('should return false if the form control does not have the requested error', () => {
      component.formGroup.get('name').setValue('John Doe')
      expect(component.hasError('name', 'required')).toBe(false)
    })

    it('should be falsy if the formGroup does not exist', () => {
      component.formGroup = null
      expect(component.hasError('name', 'required')).toBeFalsy()
    })

    it('should be falsy if the form control does not exist', () => {
      expect(component.hasError('doesNotExist', 'required')).toBeFalsy()
    })
  })
})
