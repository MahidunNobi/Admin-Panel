import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import New from "./pages/New/New"
import Single from "./pages/Single/Single"
import Navbar from "./componants/Common-Componants/Navbar/Navbar"
import Sidebar from "./componants/Common-Componants/Sidebar/Sidebar"

function App() {


  return (
    <>
    <Narbar />
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} /> 
        <Route path='login' element={<Login />} />
        <Route path='user'>
          <Route index element={<List />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<New/>} />
        </Route>
        <Route path='products'>
          <Route index element={<List />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<New/>} />
        </Route>
      </Route>
    </Routes>      
    </>
  )
}

export default App
