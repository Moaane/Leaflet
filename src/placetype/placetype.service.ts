import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { type_place } from '@prisma/client';

@Injectable()
export class PlacetypeService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<type_place[]> {
        return this.prismaService.type_place.findMany()
    }

    async findById(id: string): Promise<type_place> {
        return this.prismaService.type_place.findFirst({ where: { id } })
    }

    async createData(data: { nameType: string }): Promise<type_place> {
        return this.prismaService.type_place.create({ data })
    }


}
