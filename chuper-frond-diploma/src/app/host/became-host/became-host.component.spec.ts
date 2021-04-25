import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecameHostComponent } from './became-host.component';

describe('BecameHostComponent', () => {
  let component: BecameHostComponent;
  let fixture: ComponentFixture<BecameHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecameHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecameHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
