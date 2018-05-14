import { TestBed, inject } from '@angular/core/testing';

import { ValidateCharactersService } from './validate-characters.service';

describe('ValidateCharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateCharactersService]
    });
  });

  it('should be created', inject([ValidateCharactersService], (service: ValidateCharactersService) => {
    expect(service).toBeTruthy();
  }));
});
