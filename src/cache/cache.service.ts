import { Injectable, OnModuleInit  } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class CacheService implements OnModuleInit {
    private myCache: NodeCache;

    async onModuleInit(): Promise<void> {
        this.myCache = new NodeCache( { stdTTL: 1000, checkperiod: 200 } );
    }

    get(key: string) {
        return  this.myCache.get(key);
    }

    set(key: string, val: any): boolean {
        return this.myCache.set(key, val);
    }
}