import { Module } from '@nestjs/common';
import { PlacetypeController } from './placetype.controller';
import { PlacetypeService } from './placetype.service';

@Module({
  controllers: [PlacetypeController, ],
  providers: [PlacetypeService]
})
export class PlacetypeModule {}
