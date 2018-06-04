import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePostComponent } from './see-post.component';

describe('SeePostComponent', () => {
  let component: SeePostComponent;
  let fixture: ComponentFixture<SeePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
