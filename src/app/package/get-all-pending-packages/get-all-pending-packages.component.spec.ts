import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPendingPackagesComponent } from './get-all-pending-packages.component';

describe('GetAllPendingPackagesComponent', () => {
  let component: GetAllPendingPackagesComponent;
  let fixture: ComponentFixture<GetAllPendingPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPendingPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPendingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
