const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg1 ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    //Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12){
        text("TIME:" + hour%12 + "PM",50,100)
    }
    else if(hour==0){
        text("TIME:12AM",100,100)
    }
    else{
        text("TIME:" + hour%12 + "AM",50,100)
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/bangkok")
    //change the data in JSON format
    var responseJson = await response.json();
    // write code slice the datetime

    var datetime = responseJson.datetime;
    var hour  = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){
        bg1="sunrise1.png"
    }
    else if(hour>=07&&hour<=8){
        bg1="sunrise2.png"
    }
    else if(hour>=9&&hour<=11){
        bg1="sunrise3.png"
    }
    else if(hour>=12&&hour<=13){
        bg1="sunrise4.png"
    }
    else if(hour>=14&&hour<=15){
        bg1="sunrise5.png"
    }
    else if(hour>=15&&hour<=16){
        bg1="sunrise6.png"
    }
    else if(hour>=17&&hour<=18){
        bg1="sunrise7.png"
        }
     else   if(hour>=19&&hour<=20){
            bg1="sunrise8.png"
        }
        else if(hour>=21&&hour<=22){
            bg1="sunrise9.png"
        }
        else if(hour>=23&&hour<=00){
            bg1="sunrise10.png"
        } 

    //load the image in backgroundImg variable here
     backgroundImg=loadImage(bg1)
}
