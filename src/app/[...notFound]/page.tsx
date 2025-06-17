import { Metadata } from "next";
import { getDictionary } from "../[lang]/dictionaries";
import NotFoundEntry from "../components/modules/NotFoundEntry";

export const metadata: Metadata = {
  title: "Not Found",
  openGraph: {
    title: "Not Found",
  },
};

export default async function NotFoundCatchAll() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <NotFoundEntry dict={dict} />;
}
