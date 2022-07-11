import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTestDetailComponent } from './hero-test-detail.component';

describe('HeroTestDetailComponent', () => {
  let component: HeroTestDetailComponent;
  let fixture: ComponentFixture<HeroTestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
