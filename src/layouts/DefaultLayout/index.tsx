import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <div>
      {/* add header */}
      <main>
        <Outlet />
      </main>
      {/* add footer */}
    </div>
  )
}

export default DefaultLayout