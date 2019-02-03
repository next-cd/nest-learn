import { Controller, Get, Req, HttpCode, Param } from '@nestjs/common';
import { AppService  } from '../dog/dog.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService){

  }
  @HttpCode(209)
  @Get(':id/:name')
  findAll(@Param('id') id) { // 可以使用专有的装饰器;
    // console.log(id);
    return `This action returns a #${id} cat`;
  }
  @Get('/')
  getName(){
    return this.appService.getHello();
    // return
  }
}
// 定义一个函数  Array<string>;  类型断言