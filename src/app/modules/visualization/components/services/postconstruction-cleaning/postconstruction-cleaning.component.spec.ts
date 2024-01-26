import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostconstructionCleaningComponent } from './postconstruction-cleaning.component';

describe('PostconstructionCleaningComponent', () => {
  let component: PostconstructionCleaningComponent;
  let fixture: ComponentFixture<PostconstructionCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostconstructionCleaningComponent]
    });
    fixture = TestBed.createComponent(PostconstructionCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
