import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevenuModule } from './revenu/revenu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './revenu/entity/revenu.entity';
import { Depense } from './depense/entity/depense.entity';
import { DepenseModule } from './depense/depense.module';
import { SoldeModule } from './solde/solde.module';

@Module({
  imports: [
    RevenuModule,
    DepenseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'budget',
      entities: [Revenu, Depense],
      synchronize: true,
    }),
    SoldeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
