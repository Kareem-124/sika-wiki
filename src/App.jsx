import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Body from './components/Body'






function App() {

const [navButton,setNavButton] = useState("Activities")

  return (

    <div>
      <Body navButton = {navButton} setNavButton ={setNavButton} />

    </div>


  )
}

export default App
