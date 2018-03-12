import { TestBed, inject } from '@angular/core/testing';

import { ConsultaBackService } from './consulta-back.service';

describe('ConsultaBackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaBackService]
    });
  });

  it('should be created', inject([ConsultaBackService], (service: ConsultaBackService) => {
    expect(service).toBeTruthy();
  }));
});
