import React, {useState } from 'react'
import Texto from "./Texto"

export default function Boton(x){
    // console.log()
    let [text, setTe] = useState(true)
    const [cont, setCy] = useState(0)
    const add = () => {
        setCy(cont + x.mul)
        setTe(text = !text)
                      }

        return (
            <div>
                {cont}
                <button onClick = {add}>Agregar - {text ? 'Hi' : 'Bye'}</button>
                <Texto texto={text}/>
                {text ? 'Hi' : 'Bye'}
            
            </div>
        )
    
}
