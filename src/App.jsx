import ColorButton from "./ColorButton.jsx"
import PickedColor from "./PickedColor.jsx"
import {useState} from 'react'

function App() {
const [selectedColor, setSelectedColor] = useState ("");
  return (
    <>
    <PickedColor selectedColor = {selectedColor}/>

    <h1>Color picker</h1>
    <ColorButton colorName="blue" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="red" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="green" setSelectedColor={setSelectedColor}/>
    </>
  )
};

export default App
