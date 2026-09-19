import { Plus } from "lucide-react"
import type { IProduct } from "../../../../types/product"

interface ProductProps {
  product: IProduct
  onAddToCart: () => void
}

const Product = ({ product, onAddToCart }: ProductProps) => {
  return (
    <article className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col border border-rose-50">
      <div className="relative rounded-xl overflow-hidden mb-4 bg-rose-50 aspect-square flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white/90 text-rose-600 text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm shadow-sm">
            Novo
          </span>
        )}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-white/90 text-rose-600 text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm shadow-sm">
            {product.discount}
          </span>
        )}
      </div>

      <h3 className="font-medium text-gray-900 mb-1 leading-tight">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 flex-grow">{product.description}</p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className={`font-semibold text-lg ${product.oldPrice ? 'text-rose-600' : 'text-gray-900'}`}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <button
          onClick={() => onAddToCart()}
          className="bg-rose-50 text-rose-600 p-2.5 rounded-full hover:bg-rose-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 shadow-sm"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </article>
  )
}

export default Product