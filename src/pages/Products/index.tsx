import Product from "./components/Product"

const Products = () => {
  const PRODUCTS = [
    {
      id: 1,
      name: "Batom Matte Aveludado",
      description: "Cor: Vermelho Ruby",
      price: 49.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Batom+Matte",
      isNew: true
    },
    {
      id: 2,
      name: "Base Líquida Alta Cobertura",
      description: "Acabamento Natural - 30ml",
      price: 89.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Base+Liquida"
    },
    {
      id: 3,
      name: "Máscara de Cílios Volume",
      description: "Preto Intenso",
      price: 55.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Mascara"
    },
    {
      id: 4,
      name: "Paleta de Sombras Nude",
      description: "12 Cores Essenciais",
      price: 110.40,
      oldPrice: 129.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Paleta",
      discount: "-15%"
    },
    {
      id: 5,
      name: "Blush Compacto Iluminador",
      description: "Tom: Pêssego Dourado",
      price: 45.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Blush"
    },
    {
      id: 6,
      name: "Iluminador Líquido Glow",
      description: "Tom: Champagne",
      price: 69.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Iluminador"
    },
    {
      id: 7,
      name: "Delineador em Caneta",
      description: "Ponta Fina e Precisa",
      price: 38.90,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Delineador"
    },
    {
      id: 8,
      name: "Gloss Labial Plump",
      description: "Efeito Volume Natural",
      price: 42.50,
      image: "https://placehold.co/400x400/fff1f2/be123c?text=Gloss"
    }
  ]

  return (
    <>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
        Mais Vendidos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={() => { }}
          />
        ))}
      </div>
    </>
  )
}

export default Products