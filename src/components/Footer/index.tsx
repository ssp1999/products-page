import { Sparkles } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-rose-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="text-rose-300 w-5 h-5" />
          <span className="font-serif font-medium text-gray-900">Glow & Co.</span>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Glow & Co. Projeto Acadêmico.
        </p>
      </div>
    </footer>
  )
}

export default Footer