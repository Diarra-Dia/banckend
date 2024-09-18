import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { Revenu } from './entity/revenu.entity';

@Controller('revenu')
export class RevenuController {
  constructor(private readonly revenuService: RevenuService) {}

  // Create
  @Post()
  create(@Body() revenu: Partial<Revenu>): Promise<Revenu> {
    return this.revenuService.create(revenu);
  }

  // Get All
  @Get()
  findAll(): Promise<Revenu[]> {
    return this.revenuService.findAll();
  }

  // Get By Id
  @Get(':id')
  findById(@Param('id') id: string): Promise<Revenu> {
    return this.revenuService.findById(+id);
  }

  // update by id update

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Revenu>,
  ): Promise<void> {
    await this.revenuService.updateById(Number(id), updateData);
  }
  // delete

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<void> {
    await this.revenuService.deleteById(id);
  }
}
