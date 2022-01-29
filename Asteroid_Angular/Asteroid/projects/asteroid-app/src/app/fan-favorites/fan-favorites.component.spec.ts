import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanFavoritesComponent } from './fan-favorites.component';

describe('FanFavoritesComponent', () => {
  let component: FanFavoritesComponent;
  let fixture: ComponentFixture<FanFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
