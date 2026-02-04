import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Signin from "./pages/Signin"
import CreateAccount from "./pages/CreateAccount"
import Account from "./pages/Account"
import { ROUTE_PATHS } from "./constants.js"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path={`/${ROUTE_PATHS.SIGNIN}`} element={<Signin/>}/>
        <Route path={`/${ROUTE_PATHS.CREATE_ACCOUNT}`} element={<CreateAccount/>}/>
        <Route path={`/${ROUTE_PATHS.ACCOUNT}`} element={<Account/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
