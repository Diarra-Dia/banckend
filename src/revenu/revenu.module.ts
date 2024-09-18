import { Module } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './entity/revenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])],
  providers: [RevenuService],
  controllers: [RevenuController],
})
export class RevenuModule {}
