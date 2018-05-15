/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavslistAddComponent } from './favslist-add.component';

describe('FavslistAddComponent', () => {
  let component: FavslistAddComponent;
  let fixture: ComponentFixture<FavslistAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavslistAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavslistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
