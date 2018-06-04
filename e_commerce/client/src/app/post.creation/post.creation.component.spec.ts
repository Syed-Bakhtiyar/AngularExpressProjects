import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.CreationComponent } from './post.creation.component';

describe('Post.CreationComponent', () => {
  let component: Post.CreationComponent;
  let fixture: ComponentFixture<Post.CreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post.CreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.CreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
