import { Module } from '@nestjs/common';
import { OpenFoodStackController } from './openFoodStack.controller';
import { OpenFoodStackService } from './openFoodStack.service';
import { CacheModule } from '../cache/cache.module';

@Module({
  imports: [CacheModule],
  providers: [OpenFoodStackService],
  controllers: [OpenFoodStackController],
  exports: [OpenFoodStackService]
})
export class OpenFoodStackModule {

}