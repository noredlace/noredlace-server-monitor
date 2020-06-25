import { TestBed } from '@angular/core/testing';

import { ApiJokeService } from './api-joke.service';

describe('ApiJokeService', () => {
  let service: ApiJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
