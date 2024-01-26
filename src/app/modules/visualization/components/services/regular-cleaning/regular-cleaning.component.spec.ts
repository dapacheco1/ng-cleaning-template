import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCleaningComponent } from './regular-cleaning.component';

describe('RegularCleaningComponent', () => {
  let component: RegularCleaningComponent;
  let fixture: ComponentFixture<RegularCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularCleaningComponent]
    });
    fixture = TestBed.createComponent(RegularCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
