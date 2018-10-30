/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StubUsuariosService } from './usuarios.service';

describe('Service: Usuarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StubUsuariosService]
    });
  });

  it('should ...', inject([StubUsuariosService], (service: StubUsuariosService) => {
    expect(service).toBeTruthy();
  }));
});
