import { Controller } from '@nestjs/common';
import { Get, Post, Param , Body, Put, Delete} from "@nestjs/common";
import { PlaceService } from './place.service';
import { place } from '@prisma/client';

@Controller('place')
export class PlaceController {
    constructor (private placeServie : PlaceService){}

    @Get()
    async findAll():  Promise<place[]>{
        const datas = await this.placeServie.findAll()
        return datas;
    }

    @Get(':id')
    async findById(@Param('id')id : string): Promise<place>{
        const datas = await this.placeServie.findById(id)
        return datas;
    }

    @Post()
    async crateData(@Body()data : {name : string, description : string , latitude : string , longitude : string, type_placeid:string}): Promise<place>{
        return this.placeServie.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id')id : string, @Body() data : {name : string, description : string , latitude : string , longitude : string, type_placeid:string}) : Promise<place>{
        return this.placeServie.updataData(id,data)
    }

    @Delete(':id')
    async deleteData(@Param('id')id : string): Promise<place>{
        return this.placeServie.deleteData(id)
    }


}
