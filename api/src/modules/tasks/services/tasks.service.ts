import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from 'src/shared/database/repositories/tasks.repositories';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { ValidateTaskOwnershipService } from './validate-task-ownership.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepo: TasksRepository,
    private readonly validateTaskOwnershipService: ValidateTaskOwnershipService,
  ) {}

  create(userId: string, createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    return this.tasksRepo.create({
      data: {
        title,
        description,
        userId,
      },
      select: null,
    });
  }

  findAll(userId: string) {
    return this.tasksRepo.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(userId: string, taskId: string) {
    await this.validateTaskOwnershipService.validate(userId, taskId);

    const task = await this.tasksRepo.findFirst({
      where: {
        id: taskId,
        userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!task) throw new NotFoundException('Tarefa não encontrada.');
    return task;
  }

  async update(userId: string, taskId: string, updateTaskDto: UpdateTaskDto) {
    await this.validateTaskOwnershipService.validate(userId, taskId);

    const { title, description } = updateTaskDto;
    return this.tasksRepo.update({
      where: {
        id: taskId,
      },
      data: {
        title,
        description,
      },
    });
  }

  async remove(userId: string, taskId: string) {
    await this.validateTaskOwnershipService.validate(userId, taskId);

    await this.tasksRepo.delete({
      where: {
        id: taskId,
      },
    });

    return null;
  }
}
