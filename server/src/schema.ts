import { defineRelations } from 'drizzle-orm';
import { pgTable, serial, text, bigint, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  ownerId: bigint({ mode: "number" }).notNull(),
  content: text("content").notNull(),
  created_at: timestamp("created_at").notNull(),
});

const relations = defineRelations({ users, posts }, (r) => ({
	posts: {
		author: r.one.users({
			from: r.posts.ownerId,
			to: r.users.id,
		}),
	}
}))