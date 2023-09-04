import { initTRPC } from "@trpc/server";
import { Context } from "./context";

const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const router = t.router;

// ----------------------------------------------
// Public (Authenticated) Procedure
// ----------------------------------------------

export const publicProcedure = t.procedure;

// ----------------------------------------------
// Private (Authenticated) Procedure
// ----------------------------------------------
const isAuthenticated = t.middleware(({ next, ctx }) => {
  return next({
    ctx: {
      ...ctx,
      session: { userId: "123" },
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthenticated);
