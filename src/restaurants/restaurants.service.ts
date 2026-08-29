import { Injectable, Inject } from '@nestjs/common';
import { RestaurantDto } from './dto/restaurant.dto';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { DrizzleAsyncProvider } from '../drizzle/drizzle.provider';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async findAll(): Promise<RestaurantDto[]> {
    const allRestaurants = await this.db.select().from(schema.restaurants);
    const result: RestaurantDto[] = allRestaurants;
    return result;
  }

  async findByRestaurant(restaurantId: string) {
    return this.db
      .select()
      .from(schema.meals)
      .where(eq(schema.meals.restaurant_id, restaurantId));
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
