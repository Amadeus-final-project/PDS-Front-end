import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPackagesInMyCityComponent } from './get-all-packages-in-my-city.component';

describe('GetAllPackagesInMyCityComponent', () => {
  let component: GetAllPackagesInMyCityComponent;
  let fixture: ComponentFixture<GetAllPackagesInMyCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPackagesInMyCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPackagesInMyCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
