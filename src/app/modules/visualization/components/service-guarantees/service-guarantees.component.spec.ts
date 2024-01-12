import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGuaranteesComponent } from './service-guarantees.component';

describe('ServiceGuaranteesComponent', () => {
  let component: ServiceGuaranteesComponent;
  let fixture: ComponentFixture<ServiceGuaranteesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceGuaranteesComponent]
    });
    fixture = TestBed.createComponent(ServiceGuaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
