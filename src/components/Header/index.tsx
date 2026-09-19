import { Sparkles, ShoppingBag } from "lucide-react"
import { NavLink } from "react-router-dom"

interface HeaderProps {
  cartCount: number
}

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-rose-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Sparkles className="text-rose-500 w-6 h-6 mr-2" />
            <span className="font-serif font-semibold text-2xl text-gray-900 tracking-wide">
              Glow & Co.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors ${isActive ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600'
                }`
              }
            >
              Produtos
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors ${isActive ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600'
                }`
              }
            >
              Sobre
            </NavLink>
          </div>

          {/* Cart Area */}
          <div className="flex items-center">
            <button
              className="relative p-2 text-gray-600 hover:text-rose-600 transition-colors group"
              aria-label="Carrinho de compras"
            >
              <ShoppingBag className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header