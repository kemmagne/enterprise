import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitativesComponent } from './qualitatives.component';

describe('QualitativesComponent', () => {
  let component: QualitativesComponent;
  let fixture: ComponentFixture<QualitativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
