import { initTRPC } from "@trpc/server";
import { Context } from "./context";

const tPublic = initTRPC.create();
const tProtected = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const router = tPublic.router;

// ----------------------------------------------
// Public (Authenticated) Procedure
// ----------------------------------------------

export const publicProcedure = tPublic.procedure;

// ----------------------------------------------
// Private (Authenticated) Procedure
// ----------------------------------------------
const isAuthenticated = tProtected.middleware(({ next, ctx }) => {
  return next({
    ctx,
  });
});

export const privateProcedure = tProtected.procedure.use(isAuthenticated);
