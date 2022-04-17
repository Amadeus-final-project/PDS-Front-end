import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOfficesComponent } from './get-all-offices.component';

describe('GetAllOfficesComponent', () => {
  let component: GetAllOfficesComponent;
  let fixture: ComponentFixture<GetAllOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
