import { helpers } from "@/server/trpc/ssr-helper";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const res = await helpers.hello.fetch({
    text: "yo yo",
  });

  return {
    props: {
      message: res,
    },
  };
};

export default function SSRExample({
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{message.greeting}</h1>;
}
