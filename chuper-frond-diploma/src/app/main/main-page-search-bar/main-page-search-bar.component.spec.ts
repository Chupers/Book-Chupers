import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSearchBarComponent } from './main-page-search-bar.component';

describe('MainPageSearchBarComponent', () => {
  let component: MainPageSearchBarComponent;
  let fixture: ComponentFixture<MainPageSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
