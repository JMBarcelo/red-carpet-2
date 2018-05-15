/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavslistEditComponent } from './favslist-edit.component';

describe('FavslistEditComponent', () => {
  let component: FavslistEditComponent;
  let fixture: ComponentFixture<FavslistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavslistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavslistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
