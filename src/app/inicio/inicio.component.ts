import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  		

  		
  		/*=============================================
		PROPIEDADES DE PANTALLAS
		=============================================*/

		let pantalla = {

			superior: document.querySelector(".pantallaSuperior") as HTMLElement,
			derecha: document.querySelector(".pantallaDerecha") as HTMLElement,
			inferior: document.querySelector(".pantallaInferior") as HTMLElement,
			izquierda: document.querySelector(".pantallaIzquierda") as HTMLElement,
			ancho: window.innerWidth,
			alto: window.innerHeight,	
			prioridad:null

		}

		let dim = {

			dch: pantalla.derecha.offsetWidth,
			izd: pantalla.izquierda.offsetWidth,
			sup: pantalla.superior.offsetHeight,
			inf: pantalla.inferior.offsetHeight,
			
		} 

		/*=============================================
		FUNCIONES DE PANTALLAS
		=============================================*/

		let funcionPantalla = {

			inicio: function (){

				document.addEventListener ("click",funcionPantalla.movimiento);
					

			},

			reinicio: function(p){



				funcionPantalla.prioridad(p);
				

				pantalla.derecha.style.left = "100%";
				pantalla.izquierda.style.left = "-100%";
				pantalla.superior.style.top = "-100%";
				pantalla.inferior.style.top = "100%";

			},

			prioridad: function (p){

				switch (p){

					case "dcha":
						pantalla.derecha.style.zIndex = "4";
						pantalla.izquierda.style.zIndex = "3";
						pantalla.superior.style.zIndex = "3";
						pantalla.inferior.style.zIndex = "3";
					break;
					case "izda":
						pantalla.derecha.style.zIndex = "3";
						pantalla.izquierda.style.zIndex = "4";
						pantalla.superior.style.zIndex = "3";
						pantalla.inferior.style.zIndex = "3";
					break;
					case "supr":
						pantalla.derecha.style.zIndex = "3";
						pantalla.izquierda.style.zIndex = "3";
						pantalla.superior.style.zIndex = "4";
						pantalla.inferior.style.zIndex = "3";
					break;
					case "infr":
						pantalla.derecha.style.zIndex = "3";
						pantalla.izquierda.style.zIndex = "3";
						pantalla.superior.style.zIndex = "3";
						pantalla.inferior.style.zIndex = "4";
					break;
					default:
						pantalla.derecha.style.zIndex = "3";
						pantalla.izquierda.style.zIndex = "3";
						pantalla.superior.style.zIndex = "3";
						pantalla.inferior.style.zIndex = "3";
					break;

				}
			},


			movimiento: function (e){

				

				var event = e.target.id;

				console.log("event", event);

				switch (event){

					case "derecha":
						
						pantalla.prioridad = "dcha";
						funcionPantalla.prioridad(pantalla.prioridad);		
						pantalla.derecha.style.left = (-pantalla.ancho + dim.izd)+"px";
						
									

					break;

					case "planes":
						
						pantalla.prioridad = "dcha";
						funcionPantalla.prioridad(pantalla.prioridad);			
						pantalla.derecha.style.left = (-pantalla.ancho + dim.izd)+"px";
									

					break;

					case "izquierda":

						pantalla.prioridad = "izda";
						funcionPantalla.prioridad(pantalla.prioridad);			
						pantalla.izquierda.style.left = (pantalla.ancho - dim.dch) +"px";
									

					break;

					case "trabajos":

						pantalla.prioridad = "izda";
						funcionPantalla.prioridad(pantalla.prioridad);			
						pantalla.izquierda.style.left = (pantalla.ancho - dim.dch) +"px";
									

					break;

					case "superior":

						pantalla.prioridad = "supr";
						funcionPantalla.prioridad(pantalla.prioridad);					
						pantalla.superior.style.top = (pantalla.alto - dim.inf)+"px";
							


					break;

					case "nosotros":

						pantalla.prioridad = "supr";
						funcionPantalla.prioridad(pantalla.prioridad);	
						pantalla.superior.style.top = (pantalla.alto - dim.inf)+"px";		
						


					break;

					case "inferior":

						pantalla.prioridad = "infr";
						funcionPantalla.prioridad(pantalla.prioridad);		
						pantalla.inferior.style.top = (- pantalla.alto + dim.sup)+"px";	
								

					break;

					case "contacto":

						pantalla.prioridad = "infr";
						funcionPantalla.prioridad(pantalla.prioridad);	
						pantalla.inferior.style.top = (- pantalla.alto + dim.sup)+"px";		


					break;


					default:

						funcionPantalla.reinicio(pantalla.prioridad);
						
					break;

				}


			}
		}

		funcionPantalla.inicio();


		
  }

}
