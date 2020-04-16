import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsCComponent } from './produits-c.component';

describe('ProduitsCComponent', () => {
  let component: ProduitsCComponent;
  let fixture: ComponentFixture<ProduitsCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
