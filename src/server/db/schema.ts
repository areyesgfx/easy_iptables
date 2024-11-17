import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  timestamp,
  varchar,
  text,
  uuid,
} from "drizzle-orm/pg-core";

/**
 * Schema prefix for FireGuardian
 */
export const createTable = pgTableCreator((name) => `easy_iptables_${name}`);

// Users table
export const users = createTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
}, (table) => ({
  emailIndex: index("email_idx").on(table.email),
}));

// Threat Sources table
export const threatSources = createTable("threat_source", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 256 }).notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
},
(table) => ({
  // Add any indexes or constraints here if needed
}));
