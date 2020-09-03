import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCountryComponent } from './home-country.component';

describe('HomeCountryComponent', () => {
  let component: HomeCountryComponent;
  let fixture: ComponentFixture<HomeCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
