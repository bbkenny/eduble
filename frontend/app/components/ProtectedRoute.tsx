"use client";

import { useWeb3 } from "../context/Web3Context";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ("parent" | "teacher" | "student")[];
  fallback?: React.ReactNode;
}

export function ProtectedRoute({
  children,
  allowedRoles,
  fallback,
}: ProtectedRouteProps) {
  const { isConnected, userRole } = useWeb3();

  if (!isConnected) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center bg-eduble-light">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-eduble-mint/20 flex items-center justify-center">
              <span className="text-3xl">🔒</span>
            </div>
            <h2 className="text-xl font-semibold text-eduble-slate mb-2">
              Connect Your Wallet
            </h2>
            <p className="text-gray-600">
              Please connect your wallet to access this page
            </p>
          </div>
        </div>
      )
    );
  }

  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-eduble-light">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-3xl">⛔</span>
          </div>
          <h2 className="text-xl font-semibold text-eduble-slate mb-2">
            Access Denied
          </h2>
          <p className="text-gray-600">
            You don&apos;t have permission to access this page
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Required role: {allowedRoles.join(" or ")}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}