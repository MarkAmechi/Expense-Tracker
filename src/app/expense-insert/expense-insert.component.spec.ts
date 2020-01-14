import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseInsertComponent } from './expense-insert.component';

describe('ExpenseInsertComponent', () => {
  let component: ExpenseInsertComponent;
  let fixture: ComponentFixture<ExpenseInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
