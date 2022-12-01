import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('basic test', () => {
    // it('should return "chatting app"', () => {
    //   expect(appController.getHello()).toBe('hello world!');
    // });

    it('should be 4', () => {
      expect(2+2).toEqual(4)
    })

  });

});
