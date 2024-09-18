import {
  Controller,
  Delete,
  Injectable,
  NotFoundException,
  Patch,
  Post,
  Body,
  Param,
  Get,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entity/depense.entity';
import { Repository } from 'typeorm';
import { DepenseService } from './depense.service';

@Controller('depense')
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) {}

  @Post()
  create(@Body() depense: Partial<Depense>): Promise<Depense> {
    return this.depenseService.create(depense);
  }

  @Get()
  findAll(): Promise<Depense[]> {
    return this.depenseService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Depense> {
    return this.depenseService.findById(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Depense>,
  ): Promise<void> {
    await this.depenseService.updateById(Number(id), updateData);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<void> {
    await this.depenseService.deleteById(id);
  }
}
