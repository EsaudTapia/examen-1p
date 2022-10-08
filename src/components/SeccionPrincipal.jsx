import React from "react";
import TablaResultado from "./TablaResultado";
import { useState } from 'react'


const SeccionPrincipal = () => {
    const [Personaje, setPersonaje] = useState(0);
    const Consultar = (event) => {
        //useState
        
        const Nombre= document.getElementById('txtNombre').value
        console.log(Nombre);
        event.preventDefault();
        //consultamos el api por nombre mediate fetch
        fetch(`https://swapi.dev/api/people/?search=${Nombre}`).then(response=>response.json()).then(response=>{
            //mostramos solo la data
            

            //insertamos el resultado en el state
            setPersonaje(response.results[0]);
            
        });

       
      };

  return (
    <div>
      <div className="card">
        <h5 className="card-header">Seccion principal</h5>
        <div className="card-body">
         
            <form>
              <label className="mr-1">Nombre: </label>
              <input className="control-form" id="txtNombre"></input>
              <input
                type="submit"
                value="Consultar"
                className="ml-2 btn btn-primary"
                id="btnConsul"
                onClick={Consultar}
              ></input>
            </form>
          


          <div className="card-body">
            <TablaResultado personaje={Personaje}/>
          </div>
        </div>
        <div className="card-footer">Card footer</div>
      </div>
    </div>
  );
};

export default SeccionPrincipal;
