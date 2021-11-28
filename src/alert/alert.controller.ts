import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AlertGeteway } from './alert.geteway';

@Controller('alert')
export class AlertController {
  constructor(private alertGeteway: AlertGeteway) {}

  @Post()
  @HttpCode(200)
  sendAlertToAll(@Body() dto: { message: string }) {
    this.alertGeteway.sendtoAll(dto.message);
    return dto;
  }
}
