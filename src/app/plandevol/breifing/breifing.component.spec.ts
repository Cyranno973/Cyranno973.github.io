import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreifingComponent } from './breifing.component';

describe('BreifingComponent', () => {
  let component: BreifingComponent;
  let fixture: ComponentFixture<BreifingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreifingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreifingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
