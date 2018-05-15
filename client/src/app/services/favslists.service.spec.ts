/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavslistsService } from './favslists.service';

describe('Service: Favslists', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavslistsService]
    });
  });

  it('should ...', inject([FavslistsService], (service: FavslistsService) => {
    expect(service).toBeTruthy();
  }));
});
