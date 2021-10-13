import {useRef, useEffect, useState} from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () =>{
const myRefDiv = useRef(null)
const [vanta,setVanta] = useState(0) //Vanta va a estar inicializaco en 0
//En la primera renderizacion es igual a nulo. Valor inicial.
console.log("myRefDiv.current", myRefDiv.current)
useEffect(() =>{
    console.log("myRefDiv.current(en UseEffect", myRefDiv.current)
    //Solo pase una vez dentro del if
    // vanta === 0, es igual a vanta == false
    //!vanta es mas corto para decir vanta == false
    if (!vanta ) {
        //Solo pasa una vez
        //Aca vamos a hacer la inializacion de "vanta"

        //Activo el efecto "clouds"
        setVanta(Clouds({
            THREE,
            el: myRefDiv.current
        })) //vanta !=0 es diferente de falso 
        console.log("Establezco un valor difrente de ")
    }
    //Al salir de la pantalla debemos detener el efecto
    //y des-asociosar todos los recursos (div + vanta effect)

    return ()=>{
        // Dentro de esta funcion se va a realizar la tarea 
        // de destruir los recursos tomados por "vanta"
        if(vanta){
            vanta.destroy()
            console.log("Libero los recursos")

}        
}
},[vanta])//Con esto me aseguro que siga funcionando
return myRefDiv

}

export default useVanta