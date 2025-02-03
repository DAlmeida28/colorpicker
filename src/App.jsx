import ColorButton from "./ColorButton.jsx"
import PickedColor from "./PickedColor.jsx"
import {useState} from 'react'

function App() {
const [selectedColor, setSelectedColor] = useState ("");
  return (
    <>
    <h1>Color picker</h1>
    <PickedColor selectedColor = {selectedColor}/>

    <ColorButton colorName="blue" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="red" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="green" setSelectedColor={setSelectedColor}/>
    </>
  )
};

export default App
