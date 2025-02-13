import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Form from './components/form'
import Boutton from './components/boutton'
import ComponentClass from './components/ComponentClass'
import ComponentFonctionnel from './components/ComponentFonctionnel'
import Timer from './components/Timer'
import Counter from './components/Counter'
import NotesManager from './components/GestionnaireNote'
import Events from './components/Events'
import Products from './components/Products'

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
      <Products/>
    </>
  )
}

export default App;
