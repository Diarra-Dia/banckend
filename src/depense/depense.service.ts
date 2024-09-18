import {
  Injectable,
  NotFoundException,
  Patch,
  Delete,
  Body,
  Param,
  Post,
  Get,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entity/depense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,
  ) {}

  create(revenu: Partial<Depense>): Promise<Depense> {
    const newRevenu = this.depenseRepository.create(revenu);
    return this.depenseRepository.save(newRevenu);
  }

  findAll(): Promise<Depense[]> {
    return this.depenseRepository.find();
  }

  findById(id: number): Promise<Depense> {
    return this.depenseRepository.findOneBy({ id });
  }

  // update by id update
  @Patch()
  async updateById(id: number, updateData: Partial<Depense>): Promise<void> {
    await this.depenseRepository.update(id, updateData);
  }
  // delete
  async deleteById(id: number): Promise<void> {
    const result = await this.depenseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Revenu with ID ${id} not found`);
    }
  }

  async getTotalDepenses(): Promise<number> {
    const depenses = await this.depenseRepository.find();
    // Utilisation de reduce pour additionner tous les montants
    const totalDepenses = depenses.reduce(
      (acc, depense) => acc + depense.montant,
      0,
    );
    return totalDepenses;
  }
}
