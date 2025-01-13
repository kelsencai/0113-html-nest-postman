import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ComplianceTrainingService } from './compliance-training.service';

@Controller('compliance-training') // 定义路由前缀
export class ComplianceTrainingController {
  constructor(private readonly trainingService: ComplianceTrainingService) {}

  @Get() // 处理 GET 请求，获取所有培训记录
  async findAll() {
    return this.trainingService.findAll();
  }

  @Post() // 处理 POST 请求，创建新的培训记录
  async create(@Body() trainingData) {
    return this.trainingService.create(trainingData);
  }

  @Put(':id') // 处理 PUT 请求，更新指定 ID 的培训记录
  async update(@Param('id') id: string, @Body() trainingData) {
    return this.trainingService.update(id, trainingData);
  }

  @Delete(':id') // 处理 DELETE 请求，删除指定 ID 的培训记录
  async delete(@Param('id') id: string) {
    return this.trainingService.delete(id);
  }
}
