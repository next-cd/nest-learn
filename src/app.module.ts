import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogModule } from './dog/dog.module';

// import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';
@Module({
  imports: [CatsModule, DogModule],
  // controllers: [AppController],
  // providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 如果多个中间件 怎么弄  全局中间件已经 路有中间件
    // consumer
      // .apply(LoggerMiddleware)
      // .forRoutes(CatsController)
  }
}
