"use client"

import { Search, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import Link from "next/link"

const tvlData = [
  { date: "Sep 10", value: 450 },
  { date: "Sep 15", value: 460 },
  { date: "Sep 20", value: 470 },
  { date: "Sep 25", value: 490 },
  { date: "Sep 30", value: 520 },
  { date: "Oct 05", value: 550 },
  { date: "Oct 10", value: 558 },
]

const volumeData = [
  { date: "Sep 10", value: 12 },
  { date: "Sep 15", value: 14 },
  { date: "Sep 20", value: 13 },
  { date: "Sep 25", value: 15 },
  { date: "Sep 30", value: 16 },
  { date: "Oct 05", value: 19 },
  { date: "Oct 10", value: 17 },
]

const pools = [
  {
    token1: "SUI",
    token2: "USDC",
    fee: "0.175%",
    bricks: "2x Bricks",
    tvl: "$36.127M",
    volume: "$56.708M",
    fees: "$99,420.82",
    apr: "104.21 %",
    aprColor: "text-blue-400",
  },
  {
    token1: "xSUI",
    token2: "SUI",
    fee: "0.01%",
    bricks: "2x Bricks",
    tvl: "$58.724M",
    volume: "$16.899M",
    fees: "$1,693.41",
    apr: "2.39 %",
    aprColor: "text-blue-400",
  },
]

export default function LiquidityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("All")
  const [volumePeriod, setVolumePeriod] = useState("1M")

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* TVL Card */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm mb-2">TVL</h3>
            <p className="text-2xl md:text-3xl font-bold mb-6">$558,366,465.91</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={tvlData}>
                <defs>
                  <linearGradient id="tvlGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#4b5563" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "8px" }}
                  labelStyle={{ color: "#a1a1aa" }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#tvlGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Total Swap Volume Card */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm">Total Swap Volume</h3>
              <div className="flex gap-2">
                {["1D", "1W", "1M"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setVolumePeriod(period)}
                    className={`px-3 py-1 rounded text-xs ${
                      volumePeriod === period ? "bg-zinc-700 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold mb-6">$18,946,425,816.28</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={volumeData}>
                <XAxis dataKey="date" stroke="#4b5563" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "8px" }}
                  labelStyle={{ color: "#a1a1aa" }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Banner */}
        <div className="mb-6">
          <LiquidityBanner />
        </div>

        {/* Liquidity Pools Section */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Liquidity Pools</h2>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search pools"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-10 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {["All", "Incentivised", "Stables", "BTCFI"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  activeTab === tab ? "bg-zinc-700 text-white" : "bg-zinc-800 text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="px-4 py-2 rounded-lg text-sm bg-zinc-800 text-gray-400 hover:text-white flex items-center gap-2">
              Fee Tier: All
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Pools</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">TVL ↑</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Volume (24H) ↑</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Fees (24H) ↑</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">APR ⓘ ↑</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Rewards</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {pools.map((pool, index) => (
                  <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold">
                            {pool.token1[0]}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold">
                            {pool.token2[0]}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">
                            {pool.token1} - {pool.token2}
                          </div>
                          <div className="text-xs text-gray-400">{pool.fee}</div>
                        </div>
                        <span className="ml-2 px-2 py-1 bg-zinc-800 rounded text-xs flex items-center gap-1">
                          <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[10px]">
                            B
                          </span>
                          {pool.bricks}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium">{pool.tvl}</td>
                    <td className="py-4 px-4 font-medium">{pool.volume}</td>
                    <td className="py-4 px-4 font-medium">{pool.fees}</td>
                    <td className={`py-4 px-4 font-medium ${pool.aprColor}`}>{pool.apr}</td>
                    <td className="py-4 px-4">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-zinc-900"></div>
                        <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-zinc-900"></div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        href="/liquidity/add"
                        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        Add Liquidity
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function LiquidityBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-6 md:p-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
          Momentum & Buidlpad HODL Yield Campaign
        </h2>
        <p className="text-blue-200 text-xs md:text-sm max-w-3xl">Join Now to Earn 2x Bricks and Boost Your APRS</p>
      </div>

      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute inset-4 bg-blue-500/30 rounded-full blur-lg"></div>
          <div className="absolute inset-8 bg-blue-600/40 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-2 mt-4 md:mt-6 relative z-10">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`h-1 rounded-full transition-all ${currentSlide === 0 ? "w-8 bg-white" : "w-1 bg-gray-600"}`}
          aria-label="Slide 1"
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`h-1 rounded-full transition-all ${currentSlide === 1 ? "w-8 bg-white" : "w-1 bg-gray-600"}`}
          aria-label="Slide 2"
        />
      </div>
    </div>
  )
}
