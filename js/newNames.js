		function generator(){
			// Add your own words to the wordlist. Be carefull to obey the showed syntax
			
			var wordlist1 = ["Captain","Scurvy","Bloody","Peg Leg","One Eyed","Mad","Pale Eyed","Rotten",
							"Bluebearded","Black Hearted","Silver","Red","Flame Haired","Crooked","Rusty",
							"Beardless","Maggot Hearted","Raving","Raven","Minkah","Foul","Whalebone"];
			
			var wordlist2 = ["Hatchet","Mongrel","Sea Dog","Monkey","Robert","Molly","Starr", " ",
							"Ebony","Queen","Marcus","Hook","Flintlock","Bullet","Britches","Fancy", "Lizzy","MacCormick","Cutlass","Davey", "McGee","the Scallywag","the Lame","The Mad","The Black","the Scourge","the Coward",
							"the Plague","Borden","the Reaper","the Knife"]
			
			// Random numbers are made 
			var randomNumber1 = parseInt(Math.random() * wordlist1.length);
			var randomNumber2 = parseInt(Math.random() * wordlist2.length);

			var name = wordlist1[randomNumber1] + " " + wordlist2[randomNumber2];		
			
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