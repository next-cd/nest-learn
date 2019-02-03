import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AppService } from './dog.service';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
// import { CatsService  } from '../cats/cats.service';

@Controller('dog')
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(
    // 这是一种ts的语法 定义和 声明一起
    private readonly appService: AppService,
    // private readonly catsService: CatsService
    ) {}
    
  @Get('/')
  @UseFilters(HttpExceptionFilter)
  getHello(): string {
    console.log(HttpStatus.FORBIDDEN);
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    
    return this.appService.getHello();
  }
}

// aop 是一种非常好的思想 装饰器 就是使用aop的一种方式 纵切面思想 是非常不错的一种思想
// mobx 也是aop的一宗思想 ts 更是了 类集合 
// 函数签名 签名就是告诉你做什么 和怎么 索引签名 是非常不错的
// 一个模块有很多控制器  还有其他