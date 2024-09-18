import { Delete, Injectable, NotFoundException, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revenu } from './entity/revenu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,
  ) {}

  create(revenu: Partial<Revenu>): Promise<Revenu> {
    const newRevenu = this.revenuRepository.create(revenu);
    return this.revenuRepository.save(newRevenu);
  }

  findAll(): Promise<Revenu[]> {
    return this.revenuRepository.find();
  }

  findById(id: number): Promise<Revenu> {
    return this.revenuRepository.findOneBy({ id });
  }

  // update by id update
  @Patch()
  async updateById(id: number, updateData: Partial<Revenu>): Promise<void> {
    await this.revenuRepository.update(id, updateData);
  }
  // delete
  async deleteById(id: number): Promise<void> {
    const result = await this.revenuRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Revenu with ID ${id} not found`);
    }
  }
  async getTotalRevenus(): Promise<number> {
    const revenus = await this.revenuRepository.find(); // Récupère tous les revenus
    // Utilisation de reduce pour additionner tous les montants
    const totalRevenus = revenus.reduce((acc, revenu) => acc + revenu.montant, 0);
    return totalRevenus;
  }
}
