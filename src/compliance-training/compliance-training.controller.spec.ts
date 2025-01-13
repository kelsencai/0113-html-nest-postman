import { Test, TestingModule } from '@nestjs/testing';
import { ComplianceTrainingController } from './compliance-training.controller';

describe('ComplianceTrainingController', () => {
  let controller: ComplianceTrainingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplianceTrainingController],
    }).compile();

    controller = module.get<ComplianceTrainingController>(ComplianceTrainingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
