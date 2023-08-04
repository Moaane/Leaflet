import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './place/place.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlacetypeModule } from './placetype/placetype.module';

@Module({
  imports: [PlacetypeModule, PrismaModule, PlaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
