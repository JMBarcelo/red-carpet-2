/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavslistSingleComponent } from './favslist-single.component';

describe('FavslistSingleComponent', () => {
  let component: FavslistSingleComponent;
  let fixture: ComponentFixture<FavslistSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavslistSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavslistSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
