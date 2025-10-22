"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Banner from "@/components/banner"
import FloatingActions from "@/components/floating-actions"

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("Tier")

  const tabs = ["Tier", "TVL", "Volume", "Referred TVL", "Referred Volume", "User Referrals"]

  const leaderboardData = [
    { rank: 1, name: "LFGI MNT", address: "0x81ab...e81d", tier: "Tier 1", medal: "gold" },
    { rank: 2, name: "mingyue", address: "0x7b80...508f", tier: "Tier 1", medal: "silver" },
    { rank: 3, name: "-", address: "0xd4e2...d38d", tier: "Tier 1", medal: "bronze" },
    { rank: 4, name: "MuteWinter", address: "0x0c70...806b", tier: "Tier 1", medal: null },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        {/* User Stats Card */}
        <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Hi, 0xf749...a04a</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section - Tier and Rank */}
            <div className="flex flex-col gap-4">
              <div className="bg-zinc-800 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Tier</div>
                <div className="text-3xl font-bold">--</div>
              </div>
              <div className="bg-zinc-800 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Rank</div>
                <div className="text-3xl font-bold">--</div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3">Start Earning</Button>
            </div>

            {/* Center Section - Badge */}
            <div className="flex items-center justify-center">
              <div className="w-48 h-48 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 5 L75 25 L75 50 L75 75 L50 95 L25 75 L25 50 L25 25 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-600"
                  />
                  <path
                    d="M50 20 L65 35 L65 50 L65 65 L50 80 L35 65 L35 50 L35 35 Z"
                    fill="currentColor"
                    className="text-gray-700"
                  />
                  <rect x="40" y="45" width="20" height="3" fill="currentColor" className="text-gray-500" />
                  <rect x="40" y="52" width="20" height="3" fill="currentColor" className="text-gray-500" />
                  <rect x="40" y="59" width="20" height="3" fill="currentColor" className="text-gray-500" />
                </svg>
              </div>
            </div>

            {/* Right Section - TVL and Volume */}
            <div className="flex flex-col gap-4">
              <div className="bg-zinc-800 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm text-gray-400">TVL</div>
                  <div className="text-xs text-gray-500">Rank -</div>
                </div>
                <div className="text-3xl font-bold">-</div>
              </div>
              <div className="bg-zinc-800 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm text-gray-400">Volume</div>
                  <div className="text-xs text-gray-500">Rank -</div>
                </div>
                <div className="text-3xl font-bold">-</div>
              </div>
              <div className="bg-zinc-800 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-2">Referral Code</div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">--</div>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm">
                    My Referrals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="mb-6">
          <Banner />
        </div>

        {/* Leaderboard Section */}
        <div className="bg-zinc-900 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Leaderboard</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-zinc-800 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === tab ? "bg-zinc-800 text-white" : "text-gray-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Rank</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Name</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Address</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Tier</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((item) => (
                  <tr key={item.rank} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {item.medal === "gold" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                            1
                          </div>
                        )}
                        {item.medal === "silver" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white font-bold text-sm">
                            2
                          </div>
                        )}
                        {item.medal === "bronze" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                            3
                          </div>
                        )}
                        {!item.medal && <span className="text-white font-medium">{item.rank}</span>}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white">{item.name}</td>
                    <td className="py-4 px-4 text-gray-400 font-mono text-sm">{item.address}</td>
                    <td className="py-4 px-4 text-white">{item.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FloatingActions />
    </div>
  )
}
