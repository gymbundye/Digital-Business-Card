import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Info from './Components/Info'
import Footer from './Components/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Info/>
      <Footer/>
      

       
    </div>
  )
}

export default App
