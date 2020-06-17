import { Controller, Get, HttpCode, Req, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  // 例外を試すため
  @Get('cats-exception')
  async findAllError() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message'
    }, HttpStatus.FORBIDDEN)
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
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
