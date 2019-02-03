import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   resolve(...args: any[]): MiddlewareFunction {
//     return (req, res, next) => {
//       // 中间层存在的方式
//       console.log('RequestRequestRequestRequest...');
//       next();
//     };
//   }
// }

export function logger(req, res, next) {
  console.log(`Request...`);
  next();
}
