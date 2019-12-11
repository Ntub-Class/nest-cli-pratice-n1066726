import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { StudentModule } from './student/student.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/service/student.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [NewsModule, StudentModule, UserModule],
  controllers: [AppController, NewsController, StudentController, UserController],
  providers: [AppService, NewsService, StudentService, UserService],
})
export class AppModule { }
