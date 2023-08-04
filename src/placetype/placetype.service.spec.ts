import { Test, TestingModule } from '@nestjs/testing';
import { PlacetypeService } from './placetype.service';

describe('PlacetypeService', () => {
  let service: PlacetypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacetypeService],
    }).compile();

    service = module.get<PlacetypeService>(PlacetypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
