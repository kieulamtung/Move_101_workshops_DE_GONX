"use client";

import { Wallet, Grid3x3, HelpCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConnectButton } from "@mysten/dapp-kit"; // ✅

export default function Header() {
  // ...
  return (
    <header className="border-b border-(--color-border) bg-(--color-background)">
      {/* ... */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* ... */}
        <div className="flex items-center">
          <ConnectButton
            connectText={
              <span className="flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                <span className="hidden sm:inline">Connect Wallet</span>
                <span className="sm:hidden">Connect</span>
              </span>
            }
          />
        </div>
        {/* ... */}
      </div>
    </header>
  );
}
