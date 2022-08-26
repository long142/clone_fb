import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from "./components/AppHeader"
import MainProfile from "./components/MainProfile"
import AppLoading from './components/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  >
      {/* <AppLoading/> */}
      <AppHeader/>
      <MainProfile/>


    </div>
  )
}

export default App
