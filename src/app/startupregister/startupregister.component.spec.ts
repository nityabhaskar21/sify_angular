import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupregisterComponent } from './startupregister.component';

describe('StartupregisterComponent', () => {
  let component: StartupregisterComponent;
  let fixture: ComponentFixture<StartupregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
