import { TestBed } from '@angular/core/testing';

import { PokeMainService } from './poke-main.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search.pipe';

describe('PokeMainService', () => {
  let service: PokeMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchPipe
      ],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokeMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
