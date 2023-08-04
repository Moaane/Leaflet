import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4321)
  // await app.listen(process.env.PORT,'192.168.18.210',()=>{
  //   console.log('successfull connect')
  }

bootstrap();


