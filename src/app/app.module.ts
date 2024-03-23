import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';
import { PropertiesModule } from 'src/modules/properties/properties.module';
import { PropertyImagesModule } from 'src/property-images/property-images.module';

@Module({
  imports: [AuthModule, UsersModule, PropertiesModule, PropertyImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
