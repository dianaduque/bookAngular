import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLeftUserComponent } from './aside-left-user.component';

describe('AsideLeftUserComponent', () => {
  let component: AsideLeftUserComponent;
  let fixture: ComponentFixture<AsideLeftUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideLeftUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideLeftUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
