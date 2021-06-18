import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostHomePageComponent } from './host-home-page.component';

describe('HostHomePageComponent', () => {
  let component: HostHomePageComponent;
  let fixture: ComponentFixture<HostHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
