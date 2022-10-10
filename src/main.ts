import { ShutdownSignal } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {

  });

  app.enableShutdownHooks([ShutdownSignal.SIGINT, ShutdownSignal.SIGQUIT, ShutdownSignal.SIGTERM]);

  await app.listen(3020);
}
bootstrap().catch((err) => console.error(err));
