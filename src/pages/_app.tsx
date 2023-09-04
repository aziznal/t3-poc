import type { AppProps } from "next/app";
import "@/styles/globals.css";

import { trpc } from "@/server/trpc/utils";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
