import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsPComponent } from './produits-p.component';

describe('ProduitsPComponent', () => {
  let component: ProduitsPComponent;
  let fixture: ComponentFixture<ProduitsPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
