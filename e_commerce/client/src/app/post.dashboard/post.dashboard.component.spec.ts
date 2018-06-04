import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.DashboardComponent } from './post.dashboard.component';

describe('Post.DashboardComponent', () => {
  let component: Post.DashboardComponent;
  let fixture: ComponentFixture<Post.DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post.DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
