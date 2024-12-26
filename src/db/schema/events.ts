import {
  integer,
  timestamp,
  text,
  varchar,
  pgTable,
} from "drizzle-orm/pg-core";

export const eventsTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  date_from: timestamp().defaultNow().notNull(),
  date_until: timestamp().defaultNow().notNull(),
  location: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});
