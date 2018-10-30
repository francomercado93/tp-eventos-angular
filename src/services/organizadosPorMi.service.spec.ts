/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizadosPorMiService } from './organizadosPorMi.service';

describe('Service: OrganizadosPorMi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizadosPorMiService]
    });
  });

  it('should ...', inject([OrganizadosPorMiService], (service: OrganizadosPorMiService) => {
    expect(service).toBeTruthy();
  }));
});
