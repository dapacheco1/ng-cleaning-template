import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCleaningComponent } from './vacation-cleaning.component';

describe('VacationCleaningComponent', () => {
  let component: VacationCleaningComponent;
  let fixture: ComponentFixture<VacationCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationCleaningComponent]
    });
    fixture = TestBed.createComponent(VacationCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
