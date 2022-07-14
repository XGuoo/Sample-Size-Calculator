import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypothesistestComponent } from './hypothesistest.component';

describe('HypothesistestComponent', () => {
  let component: HypothesistestComponent;
  let fixture: ComponentFixture<HypothesistestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypothesistestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypothesistestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
