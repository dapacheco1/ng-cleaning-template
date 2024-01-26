import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCleaningComponent } from './move-cleaning.component';

describe('MoveCleaningComponent', () => {
  let component: MoveCleaningComponent;
  let fixture: ComponentFixture<MoveCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveCleaningComponent]
    });
    fixture = TestBed.createComponent(MoveCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
