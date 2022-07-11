import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodDetailComponent } from './god-detail.component';

describe('GodDetailComponent', () => {
  let component: GodDetailComponent;
  let fixture: ComponentFixture<GodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
