import { Module, Global } from '@nestjs/common';
import { AppController } from './dog.controller';
import { AppService } from './dog.service';

// @Global()
@Module({
  // imports:[],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService] 
})

export class DogModule { }
