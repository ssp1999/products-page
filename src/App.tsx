import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Products from "./pages/Products"
import About from "./pages/About"
import { useState } from "react"

function App() {
  const [cartCount, setCartCount] = useState<number>(0)

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout cartQuantity={cartCount} handleAddToCart={handleAddToCart} />}>
          <Route index element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
