import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComplianceTraining } from './compliance-training.entity';

@Injectable()
export class ComplianceTrainingService {
  constructor(
    @InjectRepository(ComplianceTraining)
    private readonly trainingRepository: Repository<ComplianceTraining>,
  ) {}

  async findAll() {
    return this.trainingRepository.find(); // 查询所有培训记录
  }

  async create(trainingData) {
    const training = this.trainingRepository.create(trainingData); // 创建新的培训记录
    return this.trainingRepository.save(training);
  }

  async update(id: string, trainingData) {
    const numericId = parseInt(id, 10); // 将字符串 ID 转换为数字
    await this.trainingRepository.update(numericId, trainingData); // 更新指定 ID 的培训记录
    return this.trainingRepository.findOne({ where: { id: numericId } }); // 使用 FindOneOptions 查询更新后的记录
  }

  async delete(id: string) {
    const numericId = parseInt(id, 10); // 将字符串 ID 转换为数字
    return this.trainingRepository.delete(numericId); // 删除指定 ID 的培训记录
  }

  async findOne(id: string) {
    const numericId = parseInt(id, 10); // 将字符串 ID 转换为数字
    return this.trainingRepository.findOne({ where: { id: numericId } }); // 查询指定 ID 的培训记录
  }
}