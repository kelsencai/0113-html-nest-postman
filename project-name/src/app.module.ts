import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplianceTraining } from './compliance-training/compliance-training.entity';
import { ComplianceTrainingModule } from './compliance-training/compliance-training.module'; // 导入 ComplianceTrainingModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // MySQL 服务器地址
      port: 3306,        // MySQL 端口（默认 3306）
      username: 'root',  // MySQL 用户名
      password: '860314', // MySQL 密码
      database: 'compliance_training', // 数据库名称
      entities: [ComplianceTraining], // 注册实体
      synchronize: true, // 自动同步数据库结构（仅用于开发环境）
      driver: require('mysql2'), // 使用 mysql2 驱动
    }),
    TypeOrmModule.forFeature([ComplianceTraining]), // 注册实体
    ComplianceTrainingModule, // 注册合规培训模块
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}