import { Module } from '@nestjs/common';
import { urlService } from './url.service';
import { urlController } from './url.controller';

@Module({
  providers: [urlService],
  controllers: [urlController]
})
export class urlModule {}
