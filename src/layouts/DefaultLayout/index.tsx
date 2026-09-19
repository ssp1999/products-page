import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"

const DefaultLayout = () => {
  return (
    <div>
      <Header cartCount={0} />
      <Banner />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default DefaultLayout