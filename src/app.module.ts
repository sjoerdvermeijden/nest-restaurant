import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { MealsModule } from './meals/meals.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [DrizzleModule, ConfigModule.forRoot({ isGlobal: true }), MealsModule, RestaurantsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}