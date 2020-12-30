import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductbycatComponent } from './viewproductbycat.component';

describe('ViewproductbycatComponent', () => {
  let component: ViewproductbycatComponent;
  let fixture: ComponentFixture<ViewproductbycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductbycatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
