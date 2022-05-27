import * as React from "react";
import Header, { HeaderStyle } from "./Header";

type Props = {
  children: React.ReactNode;
  headerStyle?: HeaderStyle | null;
};

export default function Layout({
  children,
  headerStyle,
}: Props): React.ReactElement {
  return (
    <div className="min-h-screen bg-ivory">
      <Header headerStyle={headerStyle} />
      <main className="mx-auto">{children}</main>
    </div>
  );
}
