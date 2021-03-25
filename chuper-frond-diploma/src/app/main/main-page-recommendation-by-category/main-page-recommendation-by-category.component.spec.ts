import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageRecommendationByCategoryComponent } from './main-page-recommendation-by-category.component';

describe('MainPageRecommendationByCategoryComponent', () => {
  let component: MainPageRecommendationByCategoryComponent;
  let fixture: ComponentFixture<MainPageRecommendationByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageRecommendationByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageRecommendationByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
