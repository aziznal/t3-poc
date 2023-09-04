import { trpc } from "@/server/trpc/utils";

export default function Home() {
  const helloQuery = trpc.hello.useQuery({
    text: "Me!",
  });

  if (helloQuery.isLoading) {
    return <>Loading</>;
  }

  console.log(helloQuery.data);

  return <h1>{helloQuery.data?.greeting}</h1>;
}
