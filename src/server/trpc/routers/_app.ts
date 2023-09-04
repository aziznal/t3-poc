import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      const userCount = await opts.ctx.prisma.user.count();

      return {
        greeting: `hello ${opts.input.text}`,
        userCount,
      };
    }),
  protectedHello: protectedProcedure.query(async (opts) => {
    const user = await opts.ctx.prisma.user.create({
      data: {
        email: "foo@user.com" + Math.random(),
        fullName: "Foo User",
        password: "password",
      },
    });

    const userCount = await opts.ctx.prisma.user.count();

    return {
      greeting: "Welcome to the secret society",
      userCount,
      user
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
