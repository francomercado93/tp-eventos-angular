/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvitacionesService } from './invitaciones.service';

describe('Service: Invitaciones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitacionesService]
    });
  });

  it('should ...', inject([InvitacionesService], (service: InvitacionesService) => {
    expect(service).toBeTruthy();
  }));
});
