class Game {
    constructor(){
        
    }

getGameState(){
    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value", function (data){gameState = data.val()})
}

updateGameState(state){
    database.ref('/').update({gameState:state})
    
}
start(){
    form = new Form();
    player = new Player();
}
}