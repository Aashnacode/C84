// Create a reference for the canvas
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37"){
        up();
        console.log("up");
    }
    if(keyPressed=="38"){
        down();
        console.log("down");
    }
    if(keyPressed=="39"){
        left();
        console.log("left");
    }
    if(keyPressed=="40"){
        right();
        console.log("right");
    }

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabetkey");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	//upload respective image with the message. 
	function alphabetkey(){
		img_img="Alpkey.png";
		add();
	}

	

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
