import { TestBed } from '@angular/core/testing';

import { ServicioVideosPendientesService } from './servicio-videos-pendientes.service';

describe('ServicioVideosPendientesService', () => {
  let service: ServicioVideosPendientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVideosPendientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
