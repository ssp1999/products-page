import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const DefaultLayout = () => {
  return (
    <div>
      <Header cartCount={0} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default DefaultLayout