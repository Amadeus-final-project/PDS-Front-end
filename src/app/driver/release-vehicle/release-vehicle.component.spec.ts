import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseVehicleComponent } from './release-vehicle.component';

describe('ReleaseVehicleComponent', () => {
  let component: ReleaseVehicleComponent;
  let fixture: ComponentFixture<ReleaseVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
