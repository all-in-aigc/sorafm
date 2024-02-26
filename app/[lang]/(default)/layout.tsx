import Footer from "./_components/footer";
import Header from "./_components/header";
import { ReactNode } from "react";
import { getDictionary } from "@/services/i18n";

export default async function ({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="bg-gray-900">
      <Header lang={params.lang} dict={dict} />
      <main>{children}</main>
      <Footer lang={params.lang} dict={dict} />
    </div>
  );
}
