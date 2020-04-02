var i=0;
var txt=" I am a web developer,I enjoying designing and value content structure,With knowlegde in HTML,CSS and Javascript and with other dev skills in python and c programming 
					and Im passionate about creating solutions And I love the idea of being part of digital age solutions.";
var speed=100;

window.onload=function typeWriter(){
				if(i<txt.length){
					document.getElementById("typewriter").innerHTML +=txt.charAt(i);
					i++;
					setTimeout(typeWriter,speed);
				}
			}