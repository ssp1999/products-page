import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"

const DefaultLayout = () => {
  return (
    <div>
      <Header cartCount={0} />
      <Banner />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default DefaultLayout