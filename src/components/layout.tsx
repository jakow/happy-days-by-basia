import * as React from 'react';

type Props = {
  children: React.ReactNode
}
export default function Layout({ children }) {
  return <div className="h-screen bg-ivory">
    <main>
      {children}
    </main>
  </div>
}