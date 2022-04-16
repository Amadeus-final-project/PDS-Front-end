import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetWorkingAdressComponent } from './set-working-adress.component';

describe('SetWorkingAdressComponent', () => {
  let component: SetWorkingAdressComponent;
  let fixture: ComponentFixture<SetWorkingAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetWorkingAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetWorkingAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
