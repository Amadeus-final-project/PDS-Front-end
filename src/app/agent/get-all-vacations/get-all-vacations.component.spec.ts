import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVacationsComponent } from './get-all-vacations.component';

describe('GetAllVacationsComponent', () => {
  let component: GetAllVacationsComponent;
  let fixture: ComponentFixture<GetAllVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllVacationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
