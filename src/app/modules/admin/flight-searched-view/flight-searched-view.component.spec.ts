import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchedViewComponent } from './flight-searched-view.component';

describe('FlightSearchedViewComponent', () => {
  let component: FlightSearchedViewComponent;
  let fixture: ComponentFixture<FlightSearchedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightSearchedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
