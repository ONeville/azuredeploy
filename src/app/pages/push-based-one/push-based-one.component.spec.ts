import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushBasedOneComponent } from './push-based-one.component';

describe('PushBasedOneComponent', () => {
  let component: PushBasedOneComponent;
  let fixture: ComponentFixture<PushBasedOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushBasedOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushBasedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
