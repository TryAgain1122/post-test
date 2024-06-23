'use client'

import { SessionProvider } from "next-auth/react";

interface ProviderProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers