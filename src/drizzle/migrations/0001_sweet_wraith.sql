CREATE TABLE "restaurants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text,
	"adress" text,
	"delivery_time" integer,
	"delivery_cost" integer,
	"minimal_delivery_price" integer
);
