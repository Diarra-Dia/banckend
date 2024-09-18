import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entity/depense.entity';
import { DepenseController } from './depense.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Depense])],
  providers: [DepenseService],
  controllers: [DepenseController],
})
export class DepenseModule {}
