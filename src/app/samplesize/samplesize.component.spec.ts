import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesizeComponent } from './samplesize.component';

describe('SamplesizeComponent', () => {
  let component: SamplesizeComponent;
  let fixture: ComponentFixture<SamplesizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplesizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
