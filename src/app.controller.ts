import { Controller, Get, Header, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //POST to this endpoint with an empty content-type and it works and shows the close in the log
  //POST to it with content-type: application/json and it works but never emits the close event
  @Post('test')
  async working(@Req() req) {
    console.log('Inside test');

    //This should emit, but it does not because of the json-body-middleware, why???
    req.on('close', () => console.log('-- Connection Closed --'));

    //Terminate the connection
    await new Promise((resolve) => setTimeout(resolve, 60000));

    return this.appService.getHello();
  }
}
