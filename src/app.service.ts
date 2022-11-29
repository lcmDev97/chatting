import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '깃헙 액션 CI 잘 작동함. 이제 test code 적용하자';
  }
}
