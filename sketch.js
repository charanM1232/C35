var database;
var position;
var game, player, form;
var playerCount
var gameState
function setup(){
  database = firebase.database();
  createCanvas(500,500);
game = new Game();
game.getState();
game.Start();




}

function draw(){
  background("white");
}

