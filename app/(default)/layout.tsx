import Header from "./_components/header";
import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
