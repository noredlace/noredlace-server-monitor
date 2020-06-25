import { TestBed } from '@angular/core/testing';

import { ApiTerrariaService } from './api-terraria.service';

describe('ApiTerrariaService', () => {
  let service: ApiTerrariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTerrariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
