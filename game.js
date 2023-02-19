// covid fight game

function load_img(){
// here we add some images 
}

function init(){
// define the obj that we will help in game

var	canvas = document.getElementById("mycanvas");
	console.log(canvas);
	W=800;
	H=500;
	canvas.width=W;
	canvas.height=H;
	
//	create a context of canvas 
	pen = canvas.getContext('2d');
	console.log(pen);
	
	box={
		x=160,
		y=60,
		w=60,
		h=60,
	};
	
}

function draw(){
   pen.fillRect(box.x,box.y,box.w,box.h)
}

function update(){
    
}

function gameLoop(){
    draw();
    update();
    console.log("In the gameloop")
    
}


//So here we call this gameloop multiple times so ..
let f = setInterval(gameLoop,100);