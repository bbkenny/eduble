"use client";

import React, { createContext, useContext, useState } from "react";

interface Web3ContextType {
  isConnected: boolean;
  address: string | null;
  userRole: "parent" | "teacher" | "student" | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  truncateAddress: (addr: string) => string;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<"parent" | "teacher" | "student" | null>(null);

  const truncateAddress = (addr: string): string => {
    if (!addr) return "";
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const connectWallet = async () => {
    try {
      setIsConnected(true);
      setAddress("0x742d35Cc6634C0532925a3b844Bc1e3BaB926aBC");
      setUserRole("parent");
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setUserRole(null);
  };

  return (
    <Web3Context.Provider
      value={{ isConnected, address, userRole, connectWallet, disconnectWallet, truncateAddress }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
}
