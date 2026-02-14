"use client";

import { useWeb3 } from "../context/Web3Context";

export function Navbar() {
  const { isConnected, address, userRole, connectWallet, disconnectWallet, truncateAddress } = useWeb3();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-eduble-mint flex items-center justify-center">
              <span className="text-eduble-dark font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold text-eduble-slate">Eduble</span>
          </div>

          <div className="flex items-center gap-4">
            {isConnected ? (
              <>
                <span className="text-sm text-gray-600 capitalize bg-eduble-light px-3 py-1 rounded-full">
                  {userRole}
                </span>
                <span className="text-sm text-gray-500 font-mono">
                  {address && truncateAddress(address)}
                </span>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  Disconnect
                </button>
              </>
            ) : (
              <button
                onClick={connectWallet}
                className="px-4 py-2 bg-eduble-mint text-eduble-dark font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}