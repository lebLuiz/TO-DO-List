import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class TasksRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TaskCreateArgs) {
    return this.prismaService.task.create(createDto);
  }

  findMany(findManyDto: Prisma.TaskFindManyArgs) {
    return this.prismaService.task.findMany(findManyDto);
  }

  update(updateDto: Prisma.TaskUpdateArgs) {
    return this.prismaService.task.update(updateDto);
  }

  findFirst(findFirstDto: Prisma.TaskFindFirstArgs) {
    return this.prismaService.task.findFirst(findFirstDto);
  }

  delete(deleteDto: Prisma.TaskDeleteArgs) {
    return this.prismaService.task.delete(deleteDto);
  }
}
