import { eq } from 'drizzle-orm';

import { Injectable, Inject } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { DrizzleAsyncProvider } from '../drizzle/drizzle.provider';

@Injectable()
export class MealsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async findAll() {
    const allMeals = await this.db.select().from(schema.meals);
    return allMeals;
  }

  async findOne(id: string) {
    const singleMeal = await this.db
      .select()
      .from(schema.meals)
      .where(eq(schema.meals.id, id));
    return singleMeal;
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
