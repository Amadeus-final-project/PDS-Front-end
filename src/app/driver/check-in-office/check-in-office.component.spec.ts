import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInOfficeComponent } from './check-in-office.component';

describe('CheckInOfficeComponent', () => {
  let component: CheckInOfficeComponent;
  let fixture: ComponentFixture<CheckInOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
