import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPackagesComponent } from './get-all-packages.component';

describe('GetAllPackagesComponent', () => {
  let component: GetAllPackagesComponent;
  let fixture: ComponentFixture<GetAllPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
