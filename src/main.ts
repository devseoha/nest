import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import bodyParser from 'body-parser';
import {HttpExceptionFilter} from './common/http-exception.filter';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
const basicAuth = require('express-basic-auth');
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // 암묵적으로 타입을 변환 시켜준다.
      },
    }),
  );
  const config = new DocumentBuilder().setTitle('api Document').setDescription('api Document').setVersion('1.0').addBearerAuth().build();

  app.use(
    ['/api'],
    basicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
