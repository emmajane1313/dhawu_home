import Entry from "../components/modules/Entry";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";

export default async function Home({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Entry dict={dict} lang={lang} />;
}
