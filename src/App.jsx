import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import New from "./pages/New/New"
import Single from "./pages/Single/Single"
import MainLayout from './layouts/MainLayout'

function App() {


  return (
    <>
   
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />         
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
      <Route path='/login' element={<Login />} />
    </Routes>      
    </>
  )
}

export default App
