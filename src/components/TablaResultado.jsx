import React from 'react'

const TablaResultado = (personaje) => {
	


	


    console.log(personaje);
//SI PERSONAJE ESTA VACIO NO MOSTRAR NADA

    if ( personaje.personaje != 0) {   
  return (
    <div>
         <table class="table table-bordered table-hover table-sm">
				<thead>
					<tr>
						<th>
							Nombre
						</th>
						<th >
							Altura
						</th>
						<th>
							Color de pelo
						</th>
						<th>
							Año de nacimiento
						</th>
					</tr>
				</thead>
				<tbody>
                    
                <tr>
						<td>
                        {personaje.personaje.name}
						</td>
						<td>
                        {personaje.personaje.height}
						</td>
						<td>
                        {personaje.personaje.hair_color}
						</td>
						<td>
							{personaje.personaje.birth_year}
						</td>
					</tr>
					
					
				</tbody>
			</table>

    </div>
    
  )
    }else{
		
		
			  	
		fetch('https://swapi.dev/api/people/')
		.then(response => response.json())
		.then(data => {
			   
			   //hacemos una tabla html

	var tabla='<table class="table table-bordered table-responsive">';



	//creamos la cabecera de la tabla
			
	tabla+="<thead><tr><th>Nombre</th><th>Altura</th><th>Color de pelo</th><th>Año de nacimiento</th></tr></thead>"

	//comenzamos la creación de las filas con un map

	tabla+="<tbody>"+data.results.map(
				personaje=>

				"<tr><td>"+personaje.name+"</td>"
				+"<td>"+personaje.height+"</td>"
				+"<td>"+personaje.hair_color+"</td>"
				+"<td>"+personaje.birth_year+"</td></tr>"

			).join("")+"</table></tbody>";

	//insertamos la tabla creada en el div

	document.getElementById("divLista").innerHTML = tabla;


		});


		return ( 

			<div>
				<h1>Listado de personajes</h1>
				<div id='divLista'>
					cargando..
				</div>

			</div>
		)








		}

			   	  					  	  

	}

export default TablaResultado