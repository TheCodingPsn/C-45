var database
var form, player, game

function setup(){
createCanvas(1080, 720)

database = firebase.database();

gameStateObject = new Game();
gameStateObject.start();



}

function draw(){

}
