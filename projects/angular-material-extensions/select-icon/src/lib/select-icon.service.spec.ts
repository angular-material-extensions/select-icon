import { TestBed } from '@angular/core/testing';

import { SelectIconService } from './select-icon.service';

describe('SelectIconService', () => {
  let service: SelectIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
