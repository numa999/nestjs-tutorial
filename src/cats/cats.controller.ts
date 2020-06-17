import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('not-implemented')
  @HttpCode(501)
  handleNotImplemented(): string {
    return 'Not implemented'
  }

  @Get('express')
  handleExpress(@Req() request: Request): string {
    console.log(request)
    return 'Use express request object sample.'
  }
}
