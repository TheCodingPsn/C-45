class Player {
    constructor(){
        
    }

getPlayerCount(){
    var playerCountRef = playerCount.ref('playerCount')
    playerCountRef.on("value", function(data){playerCount = data.val()})
}

updatePlayerCount(count){
database.ref('/').update({playerCount:count})
}

}