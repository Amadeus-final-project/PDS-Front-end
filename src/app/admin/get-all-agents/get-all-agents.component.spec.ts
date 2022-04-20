import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAgentsComponent } from './get-all-agents.component';

describe('GetAllAgentsComponent', () => {
  let component: GetAllAgentsComponent;
  let fixture: ComponentFixture<GetAllAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
