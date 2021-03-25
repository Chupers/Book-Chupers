import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageRecommendationByCityComponent } from './main-page-recommendation-by-city.component';

describe('MainPageRecommendationByCityComponent', () => {
  let component: MainPageRecommendationByCityComponent;
  let fixture: ComponentFixture<MainPageRecommendationByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageRecommendationByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageRecommendationByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
