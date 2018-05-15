/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarmentUploadComponent } from './garment-upload.component';

describe('GarmentUploadComponent', () => {
  let component: GarmentUploadComponent;
  let fixture: ComponentFixture<GarmentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
