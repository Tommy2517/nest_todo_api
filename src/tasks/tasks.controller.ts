import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    createTask(@Body() taskData: Task): Promise<Task> {
        return this.tasksService.createTask(taskData.title, taskData.description);
    }

    @Get()
    getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Put(':id')
    updateTask(
        @Param('id') id: number,
        @Body() taskData: Task,
    ): Promise<Task> {
        return this.tasksService.updateTask(id, taskData.title, taskData.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: number): Promise<void> {
        return this.tasksService.deleteTask(id);
    }
}
