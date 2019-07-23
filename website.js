
window.alert("welcome to my website!");

var background_tracker = 'one'
function background(){
  if(background_tracker=='one'){
  document.body.style.backgroundColor = "#DCD5DF";
  background_tracker = 'two';
  }
  else if (background_tracker=='two'){
  document.body.style.backgroundColor = "#8BEDE8";
  background_tracker = 'three';
  }
  else if (background_tracker=='three'){
  document.body.style.backgroundColor = "#F1EBA1";
  background_tracker = 'four';
  }
  else{
  document.body.style.backgroundColor = "#DBF2DE"
  background_tracker = 'one'
  }
}

function header(){
  document.getElementById('title').style.fontSize = "25px"
  document.getElementById('title').line.height = "1em"
}

function headerone(){
  document.getElementById('title').style.fontSize = "20px"
  document.getElementById('title').line.height = "1em"
}

function picture() {
  document.getElementById('bagman').src="https://dp6mhagng1yw3.cloudfront.net/entries/11th/f5ad1b81-0c6b-4c56-a5ce-3e140f974ad7.jpg"
  document.getElementById('bagman').width = 250
  document.getElementById('bagman').height = 300
}

function text() {
  document.getElementbyId("left").style.fontSize = "30px"
}
var image_tracker = 'one'
function change(){
var image = document.getElementById('bagman');
if(image_tracker=='one'){
image.src='https://dp6mhagng1yw3.cloudfront.net/entries/11th/f5ad1b81-0c6b-4c56-a5ce-3e140f974ad7.jpg';
image.width = 250
image.height = 300
image_tracker='two';
}
else{
image.src='bagman.png';
image.width = 350
image.height = 200
image_tracker='one';
}
}


var trailLength = 8 // The length of trail (8 by default; put more for longer "tail")
var path = "cursor.gif" // URL of your image

var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
var i,d = 0

function initTrail() { // prepares the script
	images = new Array() // prepare the image array
	for (i = 0; i < parseInt(trailLength); i++) {
		images[i] = new Image()
		images[i].src = path
	}
	storage = new Array() // prepare the storage for the coordinates
	for (i = 0; i < images.length*3; i++) {
		storage[i] = 0
	}
	for (i = 0; i < images.length; i++) { // make divs for IE and layers for Navigator
		document.write('<div id="obj' + i + '" style="position: absolute; z-Index: 100; height: 0; width: 0"><img src="' + images[i].src + '"></div>')
	}
	trail()
}
function trail() { // trailing function
	for (i = 0; i < images.length; i++) { // for every div/layer
		document.getElementById("obj" + i).style.top = storage[d]+'px' // the Y-coordinate
		document.getElementById("obj" + i).style.left = + storage[d+1]+'px' // the X-coordinate
		d = d+2
	}
	for (i = storage.length; i >= 2; i--) { // save the coordinate for the div/layer that's behind
		storage[i] = storage[i-2]
	}
	d = 0 // reset for future use
	var timer = setTimeout("trail()",10) // call recursively
}
function processEvent(e) { // catches and processes the mousemove event
	if (window.event) { // for IE
		storage[0] = window.event.y+standardbody.scrollTop+10
		storage[1] = window.event.x+standardbody.scrollLeft+10
	} else {
		storage[0] = e.pageY+12
		storage[1] = e.pageX+12
	}
}

	initTrail()
	document.onmousemove = processEvent // start capturing

//-->
