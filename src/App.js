import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'
import Music from './component/Music'
import Tracks from './component/Tracks'
import Pnf from './component/Pnf'

function App() {
  return (
    // BrowserRouter, it is built in component in react-router-dom, it will added in react-developer tools automatically after imported in the app.js / main component.
    // In BrowserRouter, we will write Routes and Route.
    // Routes and Route will act as switch case. here Routes is like switch and Route is like cases
    <BrowserRouter>
        <Menu/>
        {/* route path and component */}
        <Routes>
          <Route path={'/'} element={<Music/>}/>
          <Route path={'/music'} element={<Music/>}/>
          <Route path={'/tracks/artist/:id'} element={<Tracks/>}/>
          <Route path={'/*'} element={<Pnf/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
