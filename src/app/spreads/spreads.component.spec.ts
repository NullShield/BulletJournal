import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsComponent } from './spreads.component';

describe('SpreadsComponent', () => {
  let component: SpreadsComponent;
  let fixture: ComponentFixture<SpreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
