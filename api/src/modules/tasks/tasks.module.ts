import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { TasksController } from './tasks.controller';
import { ValidateTaskOwnershipService } from './services/validate-task-ownership.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, ValidateTaskOwnershipService],
  exports: [ValidateTaskOwnershipService],
})
export class TasksModule {}
