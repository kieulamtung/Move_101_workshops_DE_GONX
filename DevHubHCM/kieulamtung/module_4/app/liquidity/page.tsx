import Banner from "@/components/banner"
import SwapCard from "@/components/swap-card"
import FloatingActions from "@/components/floating-actions"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-6 md:py-8">
        <Banner />
        <div className="flex justify-center mt-6 md:mt-8">
          <SwapCard />
        </div>
      </main>
      <FloatingActions />
    </div>
  )
}
