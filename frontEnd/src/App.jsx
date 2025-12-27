import React from 'react'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Topbar from './layout/Topbar'
import Sidebar from './layout/Sidebar'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'
import AppLayout from './layout/AppLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='projects' element={<Projects />} />
      <Route path='tasks' element={<Tasks />} />
    </Route>
  )
)


function App() {
  return (
    <>
      {/* <Topbar />
        <aside>
          <Sidebar />
          <h1>Hi From Sukumar</h1>
        </aside> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
