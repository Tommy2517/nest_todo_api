import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {Task} from "./tasks/task.entity";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'artem',
      password: 'artem',
      database: 'to-do api',
      entities: [Task], // Поменяйте на ваши сущности
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
