/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarmentSingleComponent } from './garment-single.component';

describe('GarmentSingleComponent', () => {
  let component: GarmentSingleComponent;
  let fixture: ComponentFixture<GarmentSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
