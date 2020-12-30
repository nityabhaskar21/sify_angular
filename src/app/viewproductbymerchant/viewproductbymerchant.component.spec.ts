import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductbymerchantComponent } from './viewproductbymerchant.component';

describe('ViewproductbymerchantComponent', () => {
  let component: ViewproductbymerchantComponent;
  let fixture: ComponentFixture<ViewproductbymerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductbymerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductbymerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
