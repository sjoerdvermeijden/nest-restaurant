import { integer, serial, text, pgTable, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const restaurants = pgTable('restaurants', {
  id: uuid('id').defaultRandom().primaryKey(), // auto-incrementing primary key field
  name: text('name').notNull(),
  adress: text('adress').notNull(),
  delivery_time: integer().notNull(),
  delivery_cost: integer().notNull(),
  minimal_delivery_price: integer().notNull(),
});

export const meals = pgTable('meals', {
  id: uuid('id').defaultRandom().primaryKey(), // auto-incrementing primary key field
  title: text('title').notNull(),
  price: integer().notNull(),
  short_description: text(),
  restaurant_id: uuid('restaurant_id').notNull().references(() => restaurants.id),
});

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(), // auto-incrementing primary key field
  email: text('email').notNull().unique(),
  role_id: integer('role_id').notNull(),
});

export const user_role = pgTable('user_role', {
  id: serial('id').primaryKey(), // auto-incrementing primary key field
  name: text('name').notNull(),
});

export const usersRelations = relations(users, ({ one }) => ({
  user_role: one(user_role, {
    fields: [users.role_id],
    references: [user_role.id],
  }),
}));

export const mealRelations = relations(meals, ({ one }) => ({
  restaurant: one(restaurants, {
    fields: [meals.restaurant_id],
    references: [restaurants.id],
  }),
}));
