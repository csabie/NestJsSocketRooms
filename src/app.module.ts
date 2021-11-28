import { Module } from '@nestjs/common';
import { AlertController } from './alert/alert.controller';
import { AlertGeteway } from './alert/alert.geteway';
import { ChatGateway } from './chat/chat.geteway';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [ChatGateway, AlertGeteway],
})
export class AppModule {}
