import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
