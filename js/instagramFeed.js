setTimeout(function(){

    var feed = new Instafeed({
            get: 'tagged',
            tagName: 'ocean',
            
            resolution: 'standard_resolution',
            limit: 1,
            clientId: '164ba7ffcb0f47499526b2ea46ea5172'
        });


        document.getElementById('loadmore').addEventListener('click',function(){

        	 var test = document.getElementById('instafeed')
        	 console.log(test);
        	 test.innerHTML= feed.next();
        	 test.textContent=" ";
        	 document.getElementById('instafeed').innerHTML(feed.next());
        	
         });
        feed.run();
}, 0);
