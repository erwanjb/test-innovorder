import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OpenFoodStackService } from './openFoodStack.service';

@Controller('/api/openFoodStack')
export class OpenFoodStackController {
  constructor(private openFoodStackService: OpenFoodStackService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Get('/:code')
  createUser(@Param('code') code) {
    return this.openFoodStackService.getProductByCode(code);
  }

}