import { TestBed } from '@angular/core/testing'
import { filter } from 'rxjs/operators'

import { SettingsService } from './settings.service'

describe('SettingsService', () => {
  let service: SettingsService

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SettingsService] })
    service = TestBed.inject(SettingsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('current', () => {
    it('should broadcast the current settings to new subscribers', (done) => {
      const settings = { partyPercentage: 30, partySize: 4, convertToGold: true }
      service.updateSettings(settings)

      service.current$.subscribe((data) => {
        expect(data).toEqual(settings)
        done()
      })
    })
  })

  describe('updateSettings', () => {
    it('should cache the new settings data and bradcast via .current', (done) => {
      const settings = { partyPercentage: 30, partySize: 4, convertToGold: true }

      // Filter out the initial data broadcast of default data on subscribe
      service.current$.pipe(filter((data) => data.convertToGold)).subscribe((data) => {
        expect(data).toEqual(settings)
        done()
      })

      service.updateSettings(settings)
    })
  })
})
