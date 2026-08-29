import { eq } from 'drizzle-orm';

import { Injectable, Inject } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { DrizzleAsyncProvider } from '../drizzle/drizzle.provider';

@Injectable()
export class RestaurantsService {

  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async findByRestaurant(restaurantId: string) {
  return this.db
    .select()
    .from(schema.meals)
    .where(eq(schema.meals.restaurant_id, restaurantId));
  }

  async findAll() {
    const allRestaurants = await this.db.select().from(schema.restaurants);
    return allRestaurants;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
