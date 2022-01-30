import * as React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="h-screen bg-ivory">
      <Header />
      <main className="max-w-screen-xl mx-auto">{children}</main>
    </div>
  );
}
