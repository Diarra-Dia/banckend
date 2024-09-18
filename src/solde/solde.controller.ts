import { Controller, Get } from '@nestjs/common';
import { SoldeService } from './solde.service';

@Controller('solde')
export class SoldeController {
  constructor(private readonly soldeService: SoldeService) {}

  @Get()
  async getSolde(): Promise<{ solde: number }> {
    const solde = await this.soldeService.getSolde();
    return { solde };
  }
}
