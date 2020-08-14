import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" class="full-size">
      <h1 fxFlex>Split the Loot!</h1>
      <app-loot-form fxFlex></app-loot-form>
      <app-settings-form fxFlex></app-settings-form>
      <app-results fxFlex></app-results>
    </div>
  `,
  styles: [
    `
      .full-size {
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {}
