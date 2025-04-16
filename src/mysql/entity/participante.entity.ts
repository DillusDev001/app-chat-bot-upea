import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Participante {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  nro_matricula: string;

  @Column({ type: 'varchar' })
  correo: string;

  @Column({ type: 'varchar' })
  nombres: string;

  @Column({ type: 'varchar' })
  apellidos: string;

  @Column({ type: 'varchar' })
  ci: string;

  @Column({ type: 'varchar' })
  exp: string;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'varchar' })
  celular: string;

  @Column({ type: 'varchar' })
  fec_last: string;
}