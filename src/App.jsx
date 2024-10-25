import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button';

function App() {
  const [buttonTheme, setButtonTheme] = useState("dark-btn");

  return (
    <>
    <Button buttonText="Click Me!" buttonTheme={buttonTheme} />

    <button type="button" onClick={() => buttonTheme === "dark-btn" ? setButtonTheme("light-btn") : setButtonTheme("dark-btn")}>
      Toggle Other Buttons
    </button>
    <Counter />
    </>
  )
}

export default App