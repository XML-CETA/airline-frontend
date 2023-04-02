import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsViewUsersComponent } from './flights-view-users.component';

describe('FlightsViewUsersComponent', () => {
  let component: FlightsViewUsersComponent;
  let fixture: ComponentFixture<FlightsViewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsViewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
