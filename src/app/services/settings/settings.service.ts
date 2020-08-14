import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { ISettings, initialSettings } from '../../models/settings.model'

@Injectable()
export class SettingsService {
  private cache$: BehaviorSubject<ISettings>
  current$: Observable<ISettings>
  constructor() {
    this.cache$ = new BehaviorSubject<ISettings>(initialSettings)
    this.current$ = this.cache$.asObservable()
  }

  updateSettings(newSettings: ISettings): void {
    this.cache$.next(newSettings)
  }
}
