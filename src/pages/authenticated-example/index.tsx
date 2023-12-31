import { trpc } from "@/server/trpc/utils";

export default function AuthenticatedExample() {
  const helloQuery = trpc.protectedHello.useQuery();

  if (helloQuery.isLoading) {
    return <>Loading</>;
  }

  console.log(helloQuery.data);

  return <h1>{helloQuery.data?.greeting}</h1>;
}
