import { Injectable } from '@nestjs/common';
import { RevenuService } from '../revenu/revenu.service';
import { DepenseService } from '../depense/depense.service';

@Injectable()
export class SoldeService {
  constructor(
    private readonly revenuService: RevenuService,
    private readonly depenseService: DepenseService,
  ) {}

  // Calcul du solde (revenus - dépenses)
  async getSolde(): Promise<number> {
    const totalRevenus = await this.revenuService.getTotalRevenus();
    const totalDepenses = await this.depenseService.getTotalDepenses();
    const solde = totalRevenus - totalDepenses;
    return solde;
  }
}
