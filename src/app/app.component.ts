import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" class="full-size">
      <h1 fxFlex>Split the Loot!</h1>
      <div
        fxLayout.sm="column"
        fxLayout.gt-sm="row"
        fxLayoutAlign.sm="start center"
        fxLayoutAlign.gt-sm="space-between start"
        fxLayoutGap.gt-sm="50px"
        fxFlex
      >
        <app-loot-form fxFlex></app-loot-form>
        <app-settings-form fxFlex></app-settings-form>
        <app-results fxFlex></app-results>
      </div>
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
