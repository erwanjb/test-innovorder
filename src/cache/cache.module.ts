import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [],
  providers: [CacheService],
  controllers: [],
  exports: [CacheService]
})
export class CacheModule {

}