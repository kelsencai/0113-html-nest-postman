import { Repository } from 'typeorm';
import { ComplianceTraining } from './compliance-training.entity';
export declare class ComplianceTrainingService {
    private readonly trainingRepository;
    constructor(trainingRepository: Repository<ComplianceTraining>);
    findAll(): Promise<ComplianceTraining[]>;
    create(trainingData: any): Promise<ComplianceTraining[]>;
    update(id: string, trainingData: any): Promise<ComplianceTraining>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    findOne(id: string): Promise<ComplianceTraining>;
}
