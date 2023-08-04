import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypePlaceModule } from './type-place/type-place.module';
import { PlaceModule } from './place/place.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlacetypeModule } from './placetype/placetype.module';
import { TypeplaceController } from './typeplace/typeplace.controller';
import { TypePlaceModule } from './type-place/type-place.module';

@Module({
  imports: [TypePlaceModule, PlacetypeModule, PrismaModule, PlaceModule],
  controllers: [AppController, TypeplaceController],
  providers: [AppService],
})
export class AppModule {}
