"use client"

import type React from "react"
import { useState } from "react"

interface SlippageSettingsProps {
  currentSlippage: string
  onClose: () => void
  onSave: (slippage: string) => void
}

export function SlippageSettings({ currentSlippage, onClose, onSave }: SlippageSettingsProps) {
  const [selectedSlippage, setSelectedSlippage] = useState(Number.parseFloat(currentSlippage))
  const [customValue, setCustomValue] = useState("")

  const presetValues = [0.5, 1, 2.5]

  const handleSave = () => {
    const finalValue = customValue ? customValue : selectedSlippage.toString()
    onSave(finalValue)
  }

  const handlePresetClick = (value: number) => {
    setSelectedSlippage(value)
    setCustomValue("")
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setCustomValue(value)
      if (value) {
        setSelectedSlippage(Number.parseFloat(value))
      }
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
        <div className="bg-zinc-900 rounded-2xl p-6 shadow-2xl border border-zinc-800">
          <h3 className="text-2xl font-semibold text-white mb-6">Max Slippage</h3>

          {/* Preset buttons */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {presetValues.map((value) => (
              <button
                key={value}
                onClick={() => handlePresetClick(value)}
                className={`py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                  selectedSlippage === value && !customValue
                    ? "bg-transparent border-2 border-white text-white"
                    : "bg-zinc-800 text-gray-400 hover:text-white border-2 border-transparent"
                }`}
              >
                {value}%
              </button>
            ))}
          </div>

          {/* Custom input */}
          <div className="relative mb-6">
            <input
              type="text"
              value={customValue}
              onChange={handleCustomChange}
              placeholder="Custom"
              className="w-full bg-zinc-800 text-white placeholder:text-gray-400 rounded-xl px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">%</span>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onClose}
              className="py-3 text-lg font-medium bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
