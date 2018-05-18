/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarmentBorrowComponent } from './garment-borrow.component';

describe('GarmentBorrowComponent', () => {
  let component: GarmentBorrowComponent;
  let fixture: ComponentFixture<GarmentBorrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentBorrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
