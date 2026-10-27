import { useState } from 'react'

import './App.css'
import Node from './components/Node'


function App() {
  const [count] = useState(0)

  return (
    <>
      <section className="app_center bg-blue-500 w-screen h-screen flex flex-col items-center justify-center">

        <p>Hello is {count}</p>
        <Node                     
          startX="52%"
          startY={-20}
          color="#2f00ff">                     
        </Node>
        <Node                     
          startX="12%"
          startY={-20}
          color="#ff0000">                     
        </Node>

      </section>
    </>
  )
}

export default App
