import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { appRouter } from "./routers/_app";
import { createContextInner } from "./context";

export const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: await createContextInner(),
  transformer: superjson, // optional
});
