import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body()
    emailDto: {
      to: string;
      text: string;
      name: string;
    },
  ) {
    await this.emailService.sendEmail(
      emailDto.to,
      emailDto.name,
      emailDto.text,
    );
    return { message: 'Email sent successfully.' };
  }
}
