import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { threatSources } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const threatSourceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await db.select().from(threatSources);
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        address: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      return await db.insert(threatSources).values({
        name: input.name,
        address: input.address,
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await db
        .delete(threatSources)
        .where(eq(threatSources.id, input.id))
    }),
});
