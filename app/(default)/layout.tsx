import Footer from "./_components/footer";
import Header from "./_components/header";
import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
