/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarmentEditComponent } from './garment-edit.component';

describe('GarmentEditComponent', () => {
  let component: GarmentEditComponent;
  let fixture: ComponentFixture<GarmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
