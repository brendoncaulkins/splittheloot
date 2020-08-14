import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LootFormComponent } from './loot-form/loot-form.component'
import { MaterialModule } from './material.module'
import { ResultsComponent } from './results/results.component'
import { SettingsFormComponent } from './settings-form/settings-form.component'

@NgModule({
  declarations: [
    AppComponent,
    LootFormComponent,
    SettingsFormComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
