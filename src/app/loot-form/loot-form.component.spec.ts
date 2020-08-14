import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { LootFormComponent } from './loot-form.component'

describe('LootFormComponent', () => {
  let component: LootFormComponent
  let fixture: ComponentFixture<LootFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LootFormComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LootFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
