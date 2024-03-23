import { Test, TestingModule } from '@nestjs/testing';
import { PropertyImagesController } from './property-images.controller';
import { PropertyImagesService } from './property-images.service';

describe('PropertyImagesController', () => {
  let controller: PropertyImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyImagesController],
      providers: [PropertyImagesService],
    }).compile();

    controller = module.get<PropertyImagesController>(PropertyImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
