import { RefreshCw, Bookmark, Maximize2 } from "lucide-react"

export default function FloatingActions() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
      <button className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors">
        <RefreshCw className="w-5 h-5 text-gray-800" />
      </button>
      <button className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors">
        <Bookmark className="w-5 h-5 text-gray-800" />
      </button>
      <button className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors">
        <Maximize2 className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  )
}
