"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceTrainingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const compliance_training_entity_1 = require("./compliance-training.entity");
let ComplianceTrainingService = class ComplianceTrainingService {
    constructor(trainingRepository) {
        this.trainingRepository = trainingRepository;
    }
    async findAll() {
        return this.trainingRepository.find();
    }
    async create(trainingData) {
        const training = this.trainingRepository.create(trainingData);
        return this.trainingRepository.save(training);
    }
    async update(id, trainingData) {
        const numericId = parseInt(id, 10);
        await this.trainingRepository.update(numericId, trainingData);
        return this.trainingRepository.findOne({ where: { id: numericId } });
    }
    async delete(id) {
        const numericId = parseInt(id, 10);
        return this.trainingRepository.delete(numericId);
    }
    async findOne(id) {
        const numericId = parseInt(id, 10);
        return this.trainingRepository.findOne({ where: { id: numericId } });
    }
};
exports.ComplianceTrainingService = ComplianceTrainingService;
exports.ComplianceTrainingService = ComplianceTrainingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(compliance_training_entity_1.ComplianceTraining)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComplianceTrainingService);
//# sourceMappingURL=compliance-training.service.js.map