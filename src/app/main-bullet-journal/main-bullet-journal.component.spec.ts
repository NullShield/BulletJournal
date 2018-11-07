import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBulletJournalComponent } from './main-bullet-journal.component';

describe('MainBulletJournalComponent', () => {
  let component: MainBulletJournalComponent;
  let fixture: ComponentFixture<MainBulletJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBulletJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBulletJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
