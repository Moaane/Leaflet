import { Test, TestingModule } from '@nestjs/testing';
import { PlacetypeController } from './placetype.controller';

describe('PlacetypeController', () => {
  let controller: PlacetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacetypeController],
    }).compile();

    controller = module.get<PlacetypeController>(PlacetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
