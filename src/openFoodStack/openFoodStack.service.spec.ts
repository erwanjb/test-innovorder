import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodStackController } from './openFoodStack.controller';
import { OpenFoodStackService } from './openFoodStack.service';
import { CacheModule } from '../cache/cache.module';
import { CacheService } from '../cache/cache.service';
import axios from 'axios';

jest.mock('axios');

describe('AppController', () => {
  let openFoodStackService: OpenFoodStackService;
  let cacheService = {
      get: jest.fn(),
      set: jest.fn()
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CacheModule], 
      controllers: [OpenFoodStackController],
      providers: [OpenFoodStackService],
    })
    .overrideProvider(CacheService)
    .useValue(cacheService)
    .compile();

    openFoodStackService = app.get<OpenFoodStackService>(OpenFoodStackService);
  });

  describe('getProductByCode', () => {
    it('should return result', async () => {
      const result = {
          hello: 'hello'
      }  
      const axiosMock = {
          data: {
            product: result
        }
      };
      cacheService.get.mockImplementation(() => undefined);
      cacheService.set.mockImplementation(() => undefined);
      (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(axiosMock);
      expect(await openFoodStackService.getProductByCode('tet')).toBe(result);
    });

    it('should return null', async () => {
        const result = {
            hello: 'hello'
        }  
        const axiosMock = {
            data: {
              toto: result
          }
        };
        cacheService.get.mockImplementation(() => undefined);
        cacheService.set.mockImplementation(() => undefined);
        (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(axiosMock);
        expect(await openFoodStackService.getProductByCode('tet')).toBe(null);
      });

      it('should return true', async () => {
        const result = {
            hello: 'hello'
        }  
        const axiosMock = {
            data: {
              toto: result
          }
        };
        cacheService.get.mockImplementation(() => true);
        cacheService.set.mockImplementation(() => undefined);
        (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(axiosMock);
        expect(await openFoodStackService.getProductByCode('tet')).toBe(true);
      });
  });
  
});