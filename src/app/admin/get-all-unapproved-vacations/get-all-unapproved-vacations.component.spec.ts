import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllUnapprovedVacationsComponent } from './get-all-unapproved-vacations.component';

describe('GetAllUnapprovedVacationsComponent', () => {
  let component: GetAllUnapprovedVacationsComponent;
  let fixture: ComponentFixture<GetAllUnapprovedVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllUnapprovedVacationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllUnapprovedVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
