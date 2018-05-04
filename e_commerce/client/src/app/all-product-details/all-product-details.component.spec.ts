import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductDetailsComponent } from './all-product-details.component';

describe('AllProductDetailsComponent', () => {
  let component: AllProductDetailsComponent;
  let fixture: ComponentFixture<AllProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
