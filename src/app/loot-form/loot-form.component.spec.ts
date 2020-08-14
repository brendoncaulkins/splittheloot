import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { LootService } from '../services/loot/loot.service'
import { LootFormComponent } from './loot-form.component'

describe('LootFormComponent', () => {
  let component: LootFormComponent
  let fixture: ComponentFixture<LootFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LootFormComponent],
      imports: [MaterialModule, ReactiveFormsModule, NoopAnimationsModule],
      providers: [LootService],
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
