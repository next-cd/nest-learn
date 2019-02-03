import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DogModule } from '../dog/dog.module';

//  共享模块这边是必须的 必须使用这个
@Module({
  imports: [DogModule],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService] 
})
export class CatsModule { }
