import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppInfo(): any {
    return {
      app: "Budge",
      version: "0.0.1"
    };
  }
}
