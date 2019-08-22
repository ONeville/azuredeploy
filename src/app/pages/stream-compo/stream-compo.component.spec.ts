import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCompoComponent } from './stream-compo.component';

describe('StreamCompoComponent', () => {
  let component: StreamCompoComponent;
  let fixture: ComponentFixture<StreamCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
