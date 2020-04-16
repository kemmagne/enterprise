import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchersPComponent } from './marchers-p.component';

describe('MarchersPComponent', () => {
  let component: MarchersPComponent;
  let fixture: ComponentFixture<MarchersPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchersPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchersPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
