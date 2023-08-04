import { Controller, Get } from '@nestjs/common';
import { PlacetypeService } from './placetype.service';

@Controller('placetype')
export class PlacetypeController {
    constructor(private placetypeService: PlacetypeService){}

    

}
