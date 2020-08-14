import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { DisplayLootComponent } from './display-loot.component'

describe('DisplayLootComponent', () => {
  let component: DisplayLootComponent
  let fixture: ComponentFixture<DisplayLootComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayLootComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLootComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
