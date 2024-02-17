import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import New from "./pages/New"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/new" Component={New} />
      </Routes>
    </BrowserRouter>
  )
}
