import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchersCComponent } from './marchers-c.component';

describe('MarchersCComponent', () => {
  let component: MarchersCComponent;
  let fixture: ComponentFixture<MarchersCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchersCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchersCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
