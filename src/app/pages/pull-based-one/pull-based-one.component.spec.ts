import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullBasedOneComponent } from './pull-based-one.component';

describe('PullBasedOneComponent', () => {
  let component: PullBasedOneComponent;
  let fixture: ComponentFixture<PullBasedOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullBasedOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullBasedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
