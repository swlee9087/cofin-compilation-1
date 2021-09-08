import React from 'react'
import { Redirect } from 'react-router-dom'

var man={} //es5


const Basic = () => {  //lmbd fn, but component(react), atom
    const letSample = () =>{ // also class, but nested fn
        
        let tom='Tom' //es6 var
        const james='James' //es6 constant
        //^ instc vars 

    }
    const dynamicType = () => {
        let userId = 12;
        console.log (`USER ID is ${userId}`)  //string. backtick for ES6
        userId='kim'
        console.log (`USER ID is ${userId}`)
    }
    const jsonSample = () => {
        const car ={wheels:4,
        color: "red",
        drive: () => { console.log("vroom vroom") }};
    console.log(Object.keys(jsonSample)[0]); //wheels
    console.log(typeof Object.keys(jsonSample)[0]); //string
    jsonSample.drive();
    };
    

    return(<>
    <button onClick={dynamicType}>DynamicType</button>
    <button onClick={jsonSample}>JSON</button>
    </>)
}
export default Basic //react