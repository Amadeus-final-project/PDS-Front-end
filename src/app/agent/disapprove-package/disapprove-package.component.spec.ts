import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovePackageComponent } from './disapprove-package.component';

describe('DisapprovePackageComponent', () => {
  let component: DisapprovePackageComponent;
  let fixture: ComponentFixture<DisapprovePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisapprovePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapprovePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
