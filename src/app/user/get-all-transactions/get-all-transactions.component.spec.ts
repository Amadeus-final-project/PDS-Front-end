import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMyTransactionsComponent } from './get-all-transactions.component';

describe('GetAllTransactionsComponent', () => {
  let component: GetAllMyTransactionsComponent;
  let fixture: ComponentFixture<GetAllMyTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllMyTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllMyTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
