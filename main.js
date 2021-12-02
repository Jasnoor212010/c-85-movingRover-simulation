canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_width=100;
rover_height=90;
rover_x=10; rover_y=10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag= new Image();
   rover_imgTag.onload= uploadRover;
    rover_imgTag.src=rover_image;
}  

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press=='37'){
    //left();
    console.log("left");
    }
    if(key_press=='38'){
        up();
        console.log("up");
        }
        if(key_press=='39'){
            //right();
            console.log("right");
            }
            if(key_press=='40'){
                down();
                console.log("down");
                }
                

}

function up(){
    if(rover_y>=0){
        rover_y-=10;
        console.log("when up key is pressed "+rover_x+","+rover_y);
        uploadRover();
        uploadBackground();
    }
}

function down(){
    if(rover_y<=500){
        rover_y+=10;
        console.log("when down key is pressed "+rover_x+","+rover_y);
        uploadRover();
        uploadBackground();
    }
}

function right(){
    if(rover_x<=700){
        rover_x+=10;
        console.log("when down key is pressed "+rover_x+","+rover_y);
        uploadRover();
        uploadBackground();
    }
}

function left(){
    if(rover_x>=0){
        rover_x-=10;
        console.log("when down key is pressed "+rover_x+","+rover_y);
        uploadRover();
        uploadBackground();
    }
}