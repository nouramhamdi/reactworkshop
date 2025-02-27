import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Hello from './components/hello'
const Hello = React.lazy(() => import('./components/hello'))
const Products = React.lazy(() => import('./components/Products'))
const NotFound = React.lazy(() => import('./components/NotFound'))
import Form from './components/form'
import Boutton from './components/boutton'
import ComponentClass from './components/ComponentClass'
import ComponentFonctionnel from './components/ComponentFonctionnel'
import Timer from './components/Timer'
import Counter from './components/Counter'
import NotesManager from './components/GestionnaireNote'
import Events from './components/Events'
//import Products from './components/Products'

import { Link, Route, Routes } from 'react-router-dom'
import AddEvent from './components/addEvents'
//import Navbar from './components/navbar'
//import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Hello></Hello>
      <Form  labelle ="FirstName" namee ="FirstName" typee ="FirstName"></Form>
      <Form  labelle ="LasttName" namee ="LastName" typee ="FirstName"></Form>
      <Boutton></Boutton>
      <ComponentClass/>
      <ComponentFonctionnel/>
      <Timer/>
      <Counter/>
      <NotesManager/> */}
      {/* <Products/>
      <Events/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/hello" element={<Hello/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/AddEvent" element={<AddEvent/>} />
          
        </Routes>
        <nav>
        <Link to="/hello">Hello</Link>
        <br />
        <Link to="/products">Products</Link>
        <br />
        <Link to="/events">Events</Link>
        {/* <Link to="/home">Home</Link> */}
        <br />
        <Link to="/AddEvent">AddEvent</Link>
      </nav>
      </Suspense>

      
    </>
  )
}

export default App;