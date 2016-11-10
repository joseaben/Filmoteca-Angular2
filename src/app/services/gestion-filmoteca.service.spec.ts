/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestionFilmotecaService } from './gestion-filmoteca.service';

describe('Service: GestionFilmoteca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionFilmotecaService]
    });
  });

  it('should ...', inject([GestionFilmotecaService], (service: GestionFilmotecaService) => {
    expect(service).toBeTruthy();
  }));
});
