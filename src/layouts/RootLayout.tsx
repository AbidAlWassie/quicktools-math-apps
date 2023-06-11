import { Navbar, PageNav } from "../components"
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar/>
      <PageNav/>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}