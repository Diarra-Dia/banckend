import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  montant: number;
}
