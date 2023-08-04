import { Module } from '@nestjs/common';
import { PlacetypeController } from './placetype.controller';
import { PlacetypeService } from './placetype.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PlacetypeService, PrismaService],
  controllers: [PlacetypeController]
})
export class PlacetypeModule {}
