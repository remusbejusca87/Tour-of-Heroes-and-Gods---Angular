import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodSearchComponent } from './god-search.component';

describe('GodSearchComponent', () => {
  let component: GodSearchComponent;
  let fixture: ComponentFixture<GodSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
