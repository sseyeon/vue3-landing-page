import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      secure:
        this.configService.get<string>('SMTP_SECURE') === 'false'
          ? false
          : true,
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendEmail(to: string, name: string, text?: string): Promise<void> {
    const customerSubject = `[빅리더] ${name}님의 문의가 정상적으로 접수되었습니다.`;
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1>${name}님의 문의가 정상적으로 접수되었습니다.</h1>
        <p>빅리더에 문의해주셔서 감사합니다.</p>
        <p>빠른 시일 내에 답변 드리겠습니다.</p>
      </div>
    `;

    const mailToCustomer = {
      from: this.configService.get<string>('EMAIL_FROM'),
      to: to,
      subject: customerSubject,
      html: customerHtml,
    };

    await this.transporter.sendMail(mailToCustomer);

    const ourSubject = `[빅리더 홈페이지] ${name}님의 새 문의가 접수되었습니다.`;
    const ourHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; font-size: 16px; letter-spacing: 1px;">
        <h1 style="color: #4a90e2; font-size: 24px;">문의가 접수되었습니다.</h1>
        <p><strong>이메일:</strong> ${to}</p>
        <p><strong>담당자 성함:</strong> ${name}</p>
        <p><strong>문의 내용:</strong> ${text}</p>
      </div>
    `;
    const mailToOurMail = {
      from: this.configService.get<string>('EMAIL_FROM'), // 이곳에 공식 이메일 주소 사용
      to: this.configService.get<string>('SMTP_USER'),
      subject: ourSubject,
      html: ourHtml,
    };

    await this.transporter.sendMail(mailToOurMail);
  }
}
