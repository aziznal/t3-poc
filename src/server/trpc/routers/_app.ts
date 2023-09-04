import { z } from "zod";
import { privateProcedure, publicProcedure, router } from "../trpc";
import prisma from "@/client/prisma/prisma";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  protectedHello: privateProcedure.query(async (opts) => {
    const userCount = await prisma.user?.count();

    return {
      greeting: "Welcome to the secret society",
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
