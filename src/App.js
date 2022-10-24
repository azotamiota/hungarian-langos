import React from "react";
import { Routes, Route } from "react-router-dom"

import './App.css'
import {MainLayout} from './components/layouts'
import { Home, Checkout } from './components/pages'




export default function App() {

  return (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='checkout' element={<Checkout />}></Route>
    </Route>
  </Routes>
  )
}
