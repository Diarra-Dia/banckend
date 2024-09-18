import { Module } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { SoldeController } from './solde.controller';
import { RevenuService } from '../revenu/revenu.service'; 
import { DepenseService } from '../depense/depense.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from '../revenu/entity/revenu.entity'; 
import { Depense } from '../depense/entity/depense.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Revenu, Depense])], 
  controllers: [SoldeController],
  providers: [SoldeService, RevenuService, DepenseService], 
})
export class SoldeModule {}
