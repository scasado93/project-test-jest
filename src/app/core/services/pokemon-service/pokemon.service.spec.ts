import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Pokemon data', () => {
    const mockPokemon = { name: 'pikachu', species: { name: 'pikachu' } };

    service.getPokemon('pikachu').subscribe((pokemon) => {
      expect(pokemon.name).toEqual('pikachu');
      expect(pokemon.species.name).toEqual('pikachu');
    });

    const req = httpMock.expectOne(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });
});
