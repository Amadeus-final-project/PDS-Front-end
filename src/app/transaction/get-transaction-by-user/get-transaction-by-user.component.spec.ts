import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransactionByUserComponent } from './get-transaction-by-user.component';

describe('GetTransactionByUserComponent', () => {
  let component: GetTransactionByUserComponent;
  let fixture: ComponentFixture<GetTransactionByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransactionByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransactionByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
