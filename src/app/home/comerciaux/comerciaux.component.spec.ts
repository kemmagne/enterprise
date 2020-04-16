import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerciauxComponent } from './comerciaux.component';

describe('ComerciauxComponent', () => {
  let component: ComerciauxComponent;
  let fixture: ComponentFixture<ComerciauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComerciauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
