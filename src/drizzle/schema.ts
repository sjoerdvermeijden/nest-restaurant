import { integer, serial, text, pgTable, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const restaurants = pgTable('restaurants', {
  id: uuid('id').defaultRandom().primaryKey(), // auto-incrementing primary key field
  name: text('name'),
  adress: text('adress'),
  delivery_time: integer(),
  delivery_cost: integer(),
  minimal_delivery_price: integer(),
});

export const meals = pgTable('meals', {
  id: uuid('id').defaultRandom().primaryKey(), // auto-incrementing primary key field
  title: text('title'),
  price: integer(),
  short_description: text(),
  restaurant_id: integer('restaurant_id'),
});

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(), // auto-incrementing primary key field
  email: text('email').unique(),
  role_id: integer('role_id'),
});

export const user_role = pgTable('user_role', {
  id: serial('id').primaryKey(), // auto-incrementing primary key field
  name: text('name'),
});

export const usersRelations = relations(users, ({ one }) => ({
  user_role: one(user_role, {
    fields: [users.role_id],
    references: [user_role.id],
  }),
}));
