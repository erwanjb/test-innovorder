import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/database';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from './cache/cache.module';
import { UserModule } from './user/user.module';
import { OpenFoodStackModule } from './openFoodStack/openFoodStack.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions),
    AuthModule,
    CacheModule,
    UserModule,
    OpenFoodStackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
