import * as React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }) {
  return (
    <div className="h-screen bg-ivory">
      <Header />
      <main>{children}</main>
    </div>
  );
}
