import { Test, TestingModule } from '@nestjs/testing';
import { ComplianceTrainingService } from './compliance-training.service';

describe('ComplianceTrainingService', () => {
  let service: ComplianceTrainingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplianceTrainingService],
    }).compile();

    service = module.get<ComplianceTrainingService>(ComplianceTrainingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
