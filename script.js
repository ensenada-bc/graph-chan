//code to get a threads json using the imageboard api
function get_thread(){
  //set base url
  var base_url = "http://8ch.net/"
  //get board name
  var board = document.getElementById("board").value;
  board = board.value();
  //get thread number
  var thread = document.getElementById("thread").value;
  //form url to json file representing this thread
  var url = base_url + board + "/res/" + thread + ".json";
  //debugging message to console log (url)
  console.log(url);
  //load json from url
  
  //return json
}

//code to translate the imageboard api response json into json that cytoscape will accept
function translate_json(raw_json)
{
  //extract the content from each post into a nodes list
  //extract the links between nodes into a links list
  //return the links list
}

//code to display a graph using the translated json and cytoscape.js
//setup a basic cytoscape graph
var cy = cytoscape({
  // very commonly used options:
  container: undefined, 
  elements: [ /* ... */ ],
  style: [ /* ... */ ],
  layout: { name: 'grid' /* , ... */ },
  ready: function(evt){ /* ... */ },

  // initial viewport state:
  zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  boxSelectionEnabled: false,
  selectionType: (isTouchDevice ? 'additive' : 'single'),
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,

  // rendering options:
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  wheelSensitivity: 1,
  pixelRatio: 1,
  initrender: function(evt){ /* ... */ },
  renderer: { /* ... */ }
});
