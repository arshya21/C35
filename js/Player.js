class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef=database.ref("PlayerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(N){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
            name:N
        })
    }
}