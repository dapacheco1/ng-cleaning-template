import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialCleaningComponent } from './commercial-cleaning.component';

describe('CommercialCleaningComponent', () => {
  let component: CommercialCleaningComponent;
  let fixture: ComponentFixture<CommercialCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialCleaningComponent]
    });
    fixture = TestBed.createComponent(CommercialCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
