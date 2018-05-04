import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDetailComponent } from './our-product-detail.component';

describe('OurProductDetailComponent', () => {
  let component: OurProductDetailComponent;
  let fixture: ComponentFixture<OurProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
