import { Injectable, NestMiddleware } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: PinoLogger) {}

  use(req: any, res: any, next: () => void) {
    this.logger.info(`${req.method} ${req.url}`);
    next();
  }
}