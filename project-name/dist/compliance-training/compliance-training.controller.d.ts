import { ComplianceTrainingService } from './compliance-training.service';
export declare class ComplianceTrainingController {
    private readonly trainingService;
    constructor(trainingService: ComplianceTrainingService);
    findAll(): Promise<import("./compliance-training.entity").ComplianceTraining[]>;
    create(trainingData: any): Promise<import("./compliance-training.entity").ComplianceTraining[]>;
    update(id: string, trainingData: any): Promise<import("./compliance-training.entity").ComplianceTraining>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
