import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardPostComponent } from './new-board-post.component';

describe('NewBoardPostComponent', () => {
  let component: NewBoardPostComponent;
  let fixture: ComponentFixture<NewBoardPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoardPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
