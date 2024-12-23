import { Module } from '@nestjs/common';
import { payoutService } from './payout.service';
import { payoutController } from './payout.controller';

@Module({
  controllers: [payoutController],
  providers: [payoutService]
})
export class payoutModule {}
