import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ComplianceTraining {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trainingName: string;

  @Column()
  trainingDate: Date;

  @Column('text')
  participants: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
