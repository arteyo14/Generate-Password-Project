import { useState, useEffect } from 'react'
import Header from './components/header'
import Selector from './components/selector'
import Condition from './components/condition'
import StatusComp from './components/status'
import './App.css'



function App() {
  const [charLength, setCharLength] = useState(10)
  const [pass, setPass] = useState("Passwords Here")
  const [upper, setUpper] = useState(false)
  const [lower, setLower] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [status, setStatus] = useState(["WEAK", "MEDIUM", "STRENGTH"])


  //variables for characters
  let lowerChar = "abcdefghijklmnopqrstuvwxyz"
  let upperChar = lowerChar.toUpperCase();
  let numberChar = "0123456789"
  let symbolChar = "!@#$%&'()*+,-_./:;<=>"
  let char = [];

  useEffect(() => {

  }, [charLength, pass])

  //function random characters
  const randomUpper = () => {
    return upperChar[Math.floor(Math.random() * upperChar.length)]
  }

  const randomLower = () => {
    return lowerChar[Math.floor(Math.random() * lowerChar.length)]
  }

  const randomNumber = () => {
    return numberChar[Math.floor(Math.random() * numberChar.length)];
  }

  const randomSymbol = () => {
    return symbolChar[Math.floor(Math.random() * symbolChar.length)];
  }

  //function generate passwords
  function genPass() {
    let pass = "";
    for (let i = 0; i <= charLength; i++) {
      if (upper) pass += randomUpper();
      if (lower) pass += randomLower();
      if (number) pass += randomNumber();
      if (symbol) pass += randomSymbol();
    }
    const finalPass = pass.slice(0, charLength)
    return finalPass
  }

  return (
    <div className="App">
      <Header pass={pass} />
      <section className="App__container">
        <Selector length={charLength} setLength={setCharLength} />
        <Condition check={{ upper, lower, number, symbol }} setCheck={{ setUpper, setLower, setNumber, setSymbol }} />
        <StatusComp status={status} setStatus={setStatus} />
        <button className="genbtn" onClick={() => setPass(genPass())}>GENERATE</button>
      </section>
    </div>
  )
}

export default App
