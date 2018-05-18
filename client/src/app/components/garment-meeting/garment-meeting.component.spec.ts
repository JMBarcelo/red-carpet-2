/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarmentMeetingComponent } from './garment-meeting.component';

describe('GarmentMeetingComponent', () => {
  let component: GarmentMeetingComponent;
  let fixture: ComponentFixture<GarmentMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
