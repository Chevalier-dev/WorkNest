import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Topbar from './layout/Topbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <h1>Hi From Sukumar</h1>
      </BrowserRouter>
    </>
  )
}

export default App
