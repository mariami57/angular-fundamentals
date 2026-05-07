import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPriorityTodosComponent } from './high-priority-todos-component';

describe('HighPriorityTodosComponent', () => {
  let component: HighPriorityTodosComponent;
  let fixture: ComponentFixture<HighPriorityTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighPriorityTodosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighPriorityTodosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
