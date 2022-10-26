import React, { useState, useEffect, Component } from 'react';
const ClockHook = () => {
   
    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Lydia',
        apellidos: 'Manzanares'
    };

    const [edad, setEstado] = useState(0);
    const [state, setstate] = useState(defaultState);


    useEffect(() => {
        const intervalID = setInterval(() => {
            setEstado(edad+1)
            setstate(
                {
                    ...defaultState,
                    fecha: new Date(),
                    edad: setEstado(edad+1)
                }
            )
        }, 1000);


        return() =>{
            clearInterval(intervalID);
        };
         
    }, );
    

    return (
         <div>
            <h2>
            Hora Actual:
            {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    )
}

export default ClockHook;