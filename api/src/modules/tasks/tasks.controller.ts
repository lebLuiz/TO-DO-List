import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { UpdateTaskCheckDto } from './dto/update-task-check.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@ActiveUserId() userId: string, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(userId, createTaskDto);
  }

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.tasksService.findAll(userId);
  }

  @Get(':taskId')
  findById(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
  ) {
    return this.tasksService.findById(userId, taskId);
  }

  @Put(':taskId')
  update(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(userId, taskId, updateTaskDto);
  }

  @Put(':taskId/checked')
  updateChecked(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() updateTaskCheckDto: UpdateTaskCheckDto,
  ) {
    return this.tasksService.updateChecked(userId, taskId, updateTaskCheckDto);
  }

  @Delete(':taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
  ) {
    return this.tasksService.remove(userId, taskId);
  }
}
