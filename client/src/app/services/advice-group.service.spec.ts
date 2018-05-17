/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdviceGroupService } from './advice-group.service';

describe('Service: AdviceGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdviceGroupService]
    });
  });

  it('should ...', inject([AdviceGroupService], (service: AdviceGroupService) => {
    expect(service).toBeTruthy();
  }));
});
