import { Metadata } from "next";
import { tParams } from "../layout";
import { getDictionary } from "../dictionaries";

export const metadata: Metadata = {
  title: "Not Found",
  openGraph: {
    title: "Not Found",
  },
};

export default async function NotFound({ params }: { params: tParams }) {
  const { lang } = await params;
  console.log({ lang });
  const dict = await (getDictionary as (locale: any) => Promise<any>)(
    lang ?? "en"
  );
  // return <NotFoundEntry dict={dict} />;
}
