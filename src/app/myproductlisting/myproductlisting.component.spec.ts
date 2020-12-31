import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductlistingComponent } from './myproductlisting.component';

describe('MyproductlistingComponent', () => {
  let component: MyproductlistingComponent;
  let fixture: ComponentFixture<MyproductlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyproductlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
