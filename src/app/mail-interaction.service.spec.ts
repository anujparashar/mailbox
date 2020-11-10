import { TestBed } from '@angular/core/testing';

import { MailInteractionService } from './mail-interaction.service';

describe('MailInteractionService', () => {
  let service: MailInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
