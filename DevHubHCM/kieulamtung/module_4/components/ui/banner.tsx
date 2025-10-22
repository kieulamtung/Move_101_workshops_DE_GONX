"use client"

import { useState } from "react"

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-6 md:p-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
          Introducing xSUI: Liquid Staked SUI for DeFi on Momentum
        </h2>
        <p className="text-blue-200 text-xs md:text-sm max-w-3xl">
          Stake your SUI on Momentum Finance to receive xSUI — a yield-generating token you can use across the Sui DeFi
          ecosystem.
        </p>
      </div>

      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 opacity-50">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 10 L70 30 L70 70 L50 90 L30 70 L30 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-blue-300"
          />
        </svg>
      </div>

      <div className="flex gap-2 mt-4 md:mt-6 relative z-10">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`h-1 rounded-full transition-all ${currentSlide === 0 ? "w-8 bg-blue-300" : "w-1 bg-gray-600"}`}
          aria-label="Slide 1"
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`h-1 rounded-full transition-all ${currentSlide === 1 ? "w-8 bg-blue-300" : "w-1 bg-gray-600"}`}
          aria-label="Slide 2"
        />
      </div>
    </div>
  )
}
