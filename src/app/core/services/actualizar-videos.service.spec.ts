import { TestBed } from '@angular/core/testing';

import { ActualizarVideosService } from './actualizar-videos.service';

describe('ActualizarVideosService', () => {
  let service: ActualizarVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
