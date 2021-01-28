import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi Deeja, I am sorry I am doing a course while you want to talk to me !';
  }
}
