import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedItemsListComponent } from './completed-items-list-component';

describe('CompletedItemsListComponent', () => {
  let component: CompletedItemsListComponent;
  let fixture: ComponentFixture<CompletedItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedItemsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedItemsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
