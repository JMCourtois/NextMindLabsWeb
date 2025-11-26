"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  user: SimulatedUser | null;
  login: () => void;
  logout: () => void;
  toggle: () => void;
};

type SimulatedUser = {
  name: string;
  email: string;
  plan: "founder" | "standard";
  memberSince: string;
};

const SIMULATED_USER: SimulatedUser = {
  name: "María García",
  email: "maria@ejemplo.com",
  plan: "founder",
  memberSince: "Enero 2025",
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const toggle = useCallback(() => {
    setIsLoggedIn((prev) => !prev);
  }, []);

  const value: AuthContextType = {
    isLoggedIn,
    user: isLoggedIn ? SIMULATED_USER : null,
    login,
    logout,
    toggle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

