import { TestBed } from '@angular/core/testing';

import { GestionTaskService } from './gestion-task.service';

describe('GestionTaskService', () => {
  let service: GestionTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
