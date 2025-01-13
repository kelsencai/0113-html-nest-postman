import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplianceTrainingController } from './compliance-training.controller';
import { ComplianceTrainingService } from './compliance-training.service';
import { ComplianceTraining } from './compliance-training.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComplianceTraining])], // 注册实体
  controllers: [ComplianceTrainingController],
  providers: [ComplianceTrainingService],
})
export class ComplianceTrainingModule {}
