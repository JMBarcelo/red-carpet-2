/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClothesService } from './clothes.service';

describe('Service: Clothes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClothesService]
    });
  });

  it('should ...', inject([ClothesService], (service: ClothesService) => {
    expect(service).toBeTruthy();
  }));
});
