# graph-chan
experiment with drawing the 8chan graph (data from 8ch.net json api) using cytoscape.js. 

8ch.net has a json api that gives data like:

{"posts":[{"no":31,"com":"BOB POSTING IS A BAN-WORTHY OFFENSE SO DON'T DO IT, YA BONERS","name":"opticbread","trip":"!!0.7SHw9RgY","time":1411361835,"omitted_posts":0,"omitted_images":0,"sticky":1,"locked":1,"last_modified":1411363175,"country":"CA","country_name":"Canada","tn_h":190,"tn_w":255,"h":298,"w":400,"fsize":99833,"filename":"opticbread (RANTS)","ext":".jpg","tim":"1411361835805","resto":0}]}

This is formatted before being input to cytoscape.js, producing a nice graph view of items on the 8chan graph (boards, OPs, sub-posts etc).

Clicking a node follows a link to the post itself on 8ch.net.

This is an idea I had a while ago. Originally I was going to use the force layout in d3.js but I want to learn cytoscape.js for another project.

This code is probably broken, incomplete or slow, so feel free to send pull requests.
