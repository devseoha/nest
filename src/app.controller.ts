import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @ApiOperation({
    summary: '',
  })
  getStart(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @ApiOperation({
    summary: '',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
