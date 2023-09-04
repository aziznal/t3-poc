import { z } from "zod";
import { privateProcedure, publicProcedure, router } from "../trpc";

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
  protectedHello: privateProcedure.query((opts) => {
    return {
      greeting: "Welcome to the secret society",
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
