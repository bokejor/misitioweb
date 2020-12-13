import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  	/*=============================================
		PRELOAD
	=============================================*/
		let incremento = 0;
		let inc = [];

		$('body').nitePreload({
			srcAttr: 'data-nite-src',
			onProgress: function(a) {
						
				incremento = Math.floor(a.percentage);

				inc.push(incremento);

				
				let progress = (item,index)=> {

						setTimeout(()=>{		

							$("#porcentajeCarga").html(`${inc[index]}%`);

							var bars = $('.progress-bar');
							bars.width(`${100-inc[index]}%`);



							if(incremento >= 100 && (index+1)==inc.length){

								$("#preload").delay(350).slideToggle("fast");
								$(".presentacion").delay(350).css({"left":"0%"});

							

								document.getElementById("presentacion").addEventListener("transitionend", function(){

										$(".inferior").css({"opacity":"1"});
										$(".superior").css({"opacity":"1"});
										$(".derecha").css({"opacity":"1"});
										$(".izquierda").css({"opacity":"1"});


								});

							}	
						
						},index*200)						
				}

				inc.forEach(progress);			
			}


		});
  }

}
