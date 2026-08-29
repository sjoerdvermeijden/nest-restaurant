ALTER TABLE "meals" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "meals" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "meals" ALTER COLUMN "restaurant_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurants" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurants" ALTER COLUMN "adress" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurants" ALTER COLUMN "delivery_time" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurants" ALTER COLUMN "delivery_cost" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurants" ALTER COLUMN "minimal_delivery_price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_role" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role_id" SET NOT NULL;