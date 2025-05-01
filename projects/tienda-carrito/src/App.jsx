
import './App.css'
import { Products } from './componets/Products.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Header } from './componets/Header.jsx'
import { Footer } from './componets/Footer.jsx'
import { Cart } from './componets/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { useProductos } from './hooks/useProductos.js'
function App() {
  const { filterProducts } = useFilters()
  const {products}= useProductos()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      <Footer />
      
    </CartProvider>

  )
}

export default App
