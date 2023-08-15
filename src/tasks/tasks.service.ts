import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}
    async createTask(title: string, description: string): Promise<Task> {
        const task = this.taskRepository.create({ title, description });
        return await this.taskRepository.save(task);
    }

    async getTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async getTaskById(id: number): Promise<Task> {
        return await this.taskRepository.findOne({ where: { id } });
    }

    async updateTask(id: number, title: string, description: string): Promise<Task> {
        const task = await this.getTaskById(id);
        task.title = title;
        task.description = description;
        return await this.taskRepository.save(task);
    }

    async deleteTask(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}
