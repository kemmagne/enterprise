import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcherComponent } from './marcher.component';

describe('MarcherComponent', () => {
  let component: MarcherComponent;
  let fixture: ComponentFixture<MarcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
