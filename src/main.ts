import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger  } from './common/middlewares/logger.middleware';
// const logger = new LoggerMiddleware();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
