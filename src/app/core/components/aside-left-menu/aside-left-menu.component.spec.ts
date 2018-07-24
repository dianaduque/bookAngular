import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLeftMenuComponent } from './aside-left-menu.component';

describe('AsideLeftMenuComponent', () => {
  let component: AsideLeftMenuComponent;
  let fixture: ComponentFixture<AsideLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
