import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//import bootstrap from 'bootstrap'
import TituloPagina from "./components/TituloPagina";
import MenuNavegacion from "./components/MenuNavegacion";
import SeccionPrincipal from "./components/SeccionPrincipal";
import PiePagina from "./components/PiePagina";

function App() {
  
  
  return (
    <div className="App container">
     <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
	   <TituloPagina/>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4">      
   <MenuNavegacion/>
		</div>
		<div class="col-md-8">

    <SeccionPrincipal/>


		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
   <PiePagina/>
		</div>
	</div>
</div>

    </div>
  );
}

export default App;
