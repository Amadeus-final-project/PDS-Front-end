import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePackageComponent } from './approve-package.component';

describe('ApprovePackageComponent', () => {
  let component: ApprovePackageComponent;
  let fixture: ComponentFixture<ApprovePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
