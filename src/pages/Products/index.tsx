import { useOutletContext } from "react-router-dom"
import Product from "./components/Product"
import { useEffect, useState } from "react"
import type { IProduct } from "../../types/product"
import { API_URL } from "../../services/api"

interface CartContext {
  handleAddToCart: () => void
}

const Products = () => {
  const { handleAddToCart } = useOutletContext<CartContext>()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch((error) => {
        console.error("Erro ao carregar do Mockoon: ", error)
      })
  }, [])

  return (
    <>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
        Mais Vendidos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  )
}

export default Products