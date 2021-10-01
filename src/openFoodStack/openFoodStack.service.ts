import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class OpenFoodStackService {

    constructor(
        private cacheService: CacheService
    ) {}

    async getProductByCode(code: string) {
        const productInCache = this.cacheService.get('product_' + code);
        if (productInCache == undefined) {
            const getProduct = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
            const product = getProduct ? 
                (getProduct.data ? 
                    (getProduct.data.product ? getProduct.data.product : null) 
                : null) 
            : null;
            if (product) {
                this.cacheService.set('product_' + code, product);
            }
            return product;
        }
        return productInCache;
    }
}