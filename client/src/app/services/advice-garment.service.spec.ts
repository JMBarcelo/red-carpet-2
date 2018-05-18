/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdviceGarmentService } from './advice-garment.service';

describe('Service: AdviceGarment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdviceGarmentService]
    });
  });

  it('should ...', inject([AdviceGarmentService], (service: AdviceGarmentService) => {
    expect(service).toBeTruthy();
  }));
});
