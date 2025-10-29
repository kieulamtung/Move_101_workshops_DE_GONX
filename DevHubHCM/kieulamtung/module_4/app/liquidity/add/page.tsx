"use client"

import { ArrowLeft, ChevronDown, Info, Plus, Minus, RefreshCw, Bookmark, Maximize2 } from "lucide-react"
import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import Link from "next/link"
import { SlippageSettings } from "@/components/slippage-settings"

const priceRangeData = [
  { price: "3.3469", value: 0 },
  { price: "3.3603", value: 0 },
  { price: "3.3738", value: 20 },
  { price: "3.3873", value: 0 },
  { price: "3.4009", value: 0 },
  { price: "3.4145", value: 80 },
  { price: "3.4282", value: 0 },
  { price: "3.4420", value: 100 },
  { price: "3.4557", value: 0 },
  { price: "3.4696", value: 80 },
  { price: "3.4836", value: 0 },
  { price: "3.4975", value: 0 },
  { price: "3.5116", value: 0 },
]

export default function AddLiquidityPage() {
  const [selectedToken, setSelectedToken] = useState<"SUI" | "USDC">("SUI")
  const [priceRange, setPriceRange] = useState("±1%")
  const [minPrice, setMinPrice] = useState("3.400898")
  const [maxPrice, setMaxPrice] = useState("3.469597")
  const [token1Amount, setToken1Amount] = useState("1")
  const [token2Amount, setToken2Amount] = useState("4.469425")
  const [zapIn, setZapIn] = useState(false)
  const [slippage, setSlippage] = useState("0.5")
  const [showSlippageSettings, setShowSlippageSettings] = useState(false)

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/liquidity"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-2xl font-bold text-white">Add Liquidity</span>
          </Link>
          <p className="text-gray-400 text-sm">
            Deposit tokens in liquidity pools to earn swap fees, token emissions, and points
          </p>
        </div>

        {/* Pool Info */}
        <div className="bg-zinc-900 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-zinc-900 flex items-center justify-center font-bold">
                S
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-zinc-900 flex items-center justify-center font-bold">
                U
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">SUI - USDC</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div>
              <span className="text-gray-400">APR</span> <span className="font-bold text-blue-400">104.59%</span>
            </div>
            <div>
              <span className="text-gray-400">TVL</span> <span className="font-bold">$40,624,281.23</span>
            </div>
            <div>
              <span className="text-gray-400">Fee Tier</span> <span className="font-bold">0.175%</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Set Price Range */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Set Price Range</h3>

            {/* Token Toggle */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedToken("SUI")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  selectedToken === "SUI" ? "bg-white text-black" : "bg-zinc-800 text-gray-400 hover:text-white"
                }`}
              >
                SUI
              </button>
              <button
                onClick={() => setSelectedToken("USDC")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  selectedToken === "USDC" ? "bg-white text-black" : "bg-zinc-800 text-gray-400 hover:text-white"
                }`}
              >
                USDC
              </button>
            </div>

            {/* Range Presets */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {["±0.2%", "±1%", "±5%", "±10%", "±20%", "Full Range", "Custom"].map((range) => (
                <button
                  key={range}
                  onClick={() => setPriceRange(range)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                    priceRange === range
                      ? "bg-zinc-700 text-white border border-zinc-600"
                      : "bg-zinc-800 text-gray-400 hover:text-white"
                  } ${range === "Full Range" || range === "Custom" ? "col-span-2" : ""}`}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Current Price */}
            <div className="mb-4 p-3 bg-zinc-800 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                  S
                </div>
                <span className="text-lg font-bold">3.43956236</span>
                <span className="text-gray-400 text-sm">USDC</span>
              </div>
            </div>

            {/* Price Range Chart */}
            <div className="mb-4 bg-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <button className="p-1 hover:bg-zinc-700 rounded">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-zinc-700 rounded">
                  <Minus className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-zinc-700 rounded">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={priceRangeData}>
                  <Bar dataKey="value" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Min/Max Price Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Min Price / USDC per SUI</label>
                <div className="bg-zinc-800 rounded-lg p-3 flex items-center justify-between">
                  <input
                    type="text"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="bg-transparent flex-1 outline-none"
                  />
                  <div className="flex flex-col gap-1">
                    <button className="p-0.5 bg-blue-600 hover:bg-blue-700 rounded">
                      <Plus className="w-3 h-3" />
                    </button>
                    <button className="p-0.5 bg-blue-600 hover:bg-blue-700 rounded">
                      <Minus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Max Price / USDC per SUI</label>
                <div className="bg-zinc-800 rounded-lg p-3 flex items-center justify-between">
                  <input
                    type="text"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="bg-transparent flex-1 outline-none"
                  />
                  <div className="flex flex-col gap-1">
                    <button className="p-0.5 bg-blue-600 hover:bg-blue-700 rounded">
                      <Plus className="w-3 h-3" />
                    </button>
                    <button className="p-0.5 bg-blue-600 hover:bg-blue-700 rounded">
                      <Minus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Set Deposit Amounts */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Set Deposit Amounts</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Zap in</span>
                <button
                  onClick={() => setZapIn(!zapIn)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    zapIn ? "bg-blue-600" : "bg-zinc-700"
                  } relative`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      zapIn ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Slippage & APR */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Slippage</span>
                <button
                  onClick={() => setShowSlippageSettings(true)}
                  className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                >
                  <span className="font-medium">{slippage}%</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Estimated APR:</span>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-blue-400">425.35%</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Token 1 Input */}
            <div className="bg-zinc-800 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <input
                  type="text"
                  value={token1Amount}
                  onChange={(e) => setToken1Amount(e.target.value)}
                  className="bg-transparent text-3xl font-bold outline-none flex-1"
                  placeholder="0.0"
                />
                <button className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-3 py-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                    S
                  </div>
                  <span className="font-medium">SUI</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">$3.441</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Balance: 2.202401</span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">50%</button>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">MAX</button>
                </div>
              </div>
            </div>

            {/* Token 2 Input */}
            <div className="bg-zinc-800 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <input
                  type="text"
                  value={token2Amount}
                  onChange={(e) => setToken2Amount(e.target.value)}
                  className="bg-transparent text-3xl font-bold outline-none flex-1"
                  placeholder="0.0"
                />
                <button className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-3 py-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs font-bold">
                    U
                  </div>
                  <span className="font-medium">USDC</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">$4.468</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Balance: 0.873739</span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">50%</button>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">MAX</button>
                </div>
              </div>
            </div>

            {/* Add Liquidity Button */}
            <button className="w-full py-4 bg-zinc-700 text-gray-400 rounded-xl font-bold text-lg cursor-not-allowed">
              Insufficient Balance
            </button>
          </div>
        </div>
      </div>

      {/* Floating Actions */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors">
          <RefreshCw className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Slippage Settings Modal */}
      {showSlippageSettings && (
        <SlippageSettings
          currentSlippage={slippage}
          onClose={() => setShowSlippageSettings(false)}
          onSave={(value) => {
            setSlippage(value)
            setShowSlippageSettings(false)
          }}
        />
      )}
    </div>
  )
}
