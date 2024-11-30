import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/Sendmoney'
import { Landing } from './pages/Landing'
import { Transfer } from './pages/Transaction'

function App() {
  

  return (
     <BrowserRouter>
     <Routes>
      <Route path='/transfered' element={<Transfer></Transfer>}></Route>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/Send' element={<SendMoney></SendMoney>}></Route>
      
     </Routes>
     </BrowserRouter>
  )
}

export default App
