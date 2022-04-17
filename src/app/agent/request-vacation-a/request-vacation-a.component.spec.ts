import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVacationAComponent } from './request-vacation-a.component';

describe('RequestVacationAComponent', () => {
  let component: RequestVacationAComponent;
  let fixture: ComponentFixture<RequestVacationAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestVacationAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVacationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
