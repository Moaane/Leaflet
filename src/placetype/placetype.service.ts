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

    async createData(data: { typeName: string }): Promise<type_place> {
        return this.prismaService.type_place.create({ data })
    }

    async updateData(id: string, data: { typeName: string }): Promise<type_place> {
        return this.prismaService.type_place.update({
            where: { id },
            data
        })
    }

    async deleteData(id: string): Promise<type_place> {
        return this.prismaService.type_place.delete({ where: { id } })
    }

}
