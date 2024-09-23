import { ButtonGrid, Container, Content } from "./styles";
import Input from "./components/Input"
import Button from "./components/Button";
import { useState } from "react";


const App = () => {
  const [number, setNumber] = useState("0")
  const [numberMemory, setNumberMemory] = useState(0)
  const [operation, setOperation] = useState("")

  const handleAddNumber = (num) => {
    if(number === "0") {
      setNumber(num)
    } else {
      setNumber(value => `${value}${num}`)
    }
  }

  const handleClear = () => {
    setNumber("0")
    setNumberMemory(0)
  }

  const handleCalc = (num, op) => {
    setNumberMemory(Number.parseInt(num))
    setOperation(op)
    setNumber("0")
  }

  const handleEqual = (num) => {
    if(!numberMemory !== 0 && num !== "0") {
      switch(operation) {
        case "+":
          setNumber(`${numberMemory + Number.parseInt(num)}`)
          setNumberMemory(0)
          break
        case "-":
          setNumber(numberMemory - Number.parseInt(num))
          setNumberMemory(0)
          break
        case "x":
          setNumber(numberMemory * Number.parseInt(num))
          setNumberMemory(0)
          break
        case "/":
          if(num === "0") {
            window.alert("Não é possível dividir por zero")
            handleClear()
          } else {
            setNumber(numberMemory / Number.parseInt(num))
            setNumberMemory(0)
          }
          break
        default:
          window.alert("Ocorreu algum erro...")
          handleClear()
      } 
    } else {
      window.alert("Digite o valor antes de verificar o resultado!")
      handleClear()
    }
  }

  return (
    <Container className="App">
      <Content>
        <Input currentValue={number} />
        <ButtonGrid>
          <Button text={7} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={8} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={9} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text="x" aoClicar={(e) => handleCalc(number, e.target.innerHTML)}/>
          <Button text={4} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={5} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={6} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={"-"} aoClicar={(e) => handleCalc(number, e.target.innerHTML)}/>
          <Button text={1} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={2} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={3} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={"+"} aoClicar={(e) => handleCalc(number, e.target.innerHTML)} />
          <Button text={"C"} aoClicar={() => handleClear()} />
          <Button text={0} aoClicar={(e) => handleAddNumber(e.target.innerHTML)} />
          <Button text={"/"} aoClicar={(e) => handleCalc(number, e.target.innerHTML)}/>
          <Button text={"="} aoClicar={() => handleEqual(number)} />
        </ButtonGrid>
      </Content>
    </Container>
  );
}

export default App;
