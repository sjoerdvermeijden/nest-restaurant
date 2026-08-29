import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { MealsService } from '../meals/meals.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get(':restaurantId/meals')
  findByRestaurant(@Param('restaurantId') restaurantId: string) {
    return this.restaurantsService.findByRestaurant(restaurantId);
  }

  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(+id);
  }
}
