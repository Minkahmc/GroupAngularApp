		function generator(){
			// Add your own words to the wordlist. Be carefull to obey the showed syntax
			
			var wordlist1 = ["Cool","Masked","Bloody","Lame","Big","Stupid","Drunk","Rotten",
							"Blue","Black","White","Red","Purple","Golden","Silver"];
			
			var wordlist2 = ["Hamster","Moose","Lama","Duck","Bear","Eagle","Tiger",
							"Rocket","Bullet","Knee","Foot","Hand"]

			var wordlist3 = ["Hamster","Moose","Lama","Duck","Bear","Eagle","Tiger",
							"Rocket","Bullet","Knee","Foot","Hand"]
			
			// Random numbers are made 
			var randomNumber1 = parseInt(Math.random() * wordlist1.length);
			var randomNumber2 = parseInt(Math.random() * wordlist2.length);
			var randomNumber3 = parseInt(Math.random() * wordlist3.length);
			var name = wordlist1[randomNumber1] + " " + wordlist2[randomNumber2];	 + " " + wordlist3[randomNumber3]		
			
			//alert(name); //Remove first to slashes to alert the name
			
			//If there's already a name it is removed  
			if(document.getElementById("result")){
				document.getElementById("placeholder").removeChild(document.getElementById("result"));
			}
			// A div element is created to show the generated name. The Name is added as a textnode. Textnode is added to the placeholder.
			var element = document.createElement("div");
			element.setAttribute("id", "result");
			element.appendChild(document.createTextNode(name));
			document.getElementById("placeholder").appendChild(element);
		}