import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTestComponent } from './heroes-test.component';

describe('HeroesTestComponent', () => {
  let component: HeroesTestComponent;
  let fixture: ComponentFixture<HeroesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
