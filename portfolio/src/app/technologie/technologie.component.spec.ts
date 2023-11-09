import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieComponent } from './technologie.component';

describe('TechnologieComponent', () => {
  let component: TechnologieComponent;
  let fixture: ComponentFixture<TechnologieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologieComponent]
    });
    fixture = TestBed.createComponent(TechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
