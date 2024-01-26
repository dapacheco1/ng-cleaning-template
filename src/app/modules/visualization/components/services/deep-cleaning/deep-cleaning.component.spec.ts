import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepCleaningComponent } from './deep-cleaning.component';

describe('DeepCleaningComponent', () => {
  let component: DeepCleaningComponent;
  let fixture: ComponentFixture<DeepCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepCleaningComponent]
    });
    fixture = TestBed.createComponent(DeepCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
