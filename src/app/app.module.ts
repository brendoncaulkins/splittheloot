import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DisplayLootComponent } from './display-loot/display-loot.component'
import { LootFormComponent } from './loot-form/loot-form.component'
import { MaterialModule } from './material.module'
import { ResultsComponent } from './results/results.component'
import { LootService } from './services/loot/loot.service'
import { SettingsService } from './services/settings/settings.service'
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    LootFormComponent,
    SettingsFormComponent,
    ResultsComponent,
    DisplayLootComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LootService, SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
