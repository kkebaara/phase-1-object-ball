function gameObject() {
    return {
        home: 
            { teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players:{ 
                    "Alan Anderson":{
                            number: 0, 
                            shoe: 16,
                            points: 22,
                            Rebounds: 12,
                            Assists: 12,
                            Steals: 3,
                            Blocks: 1,
                            SlamDunks: 1 
                        },
                    "Reggie Evans":{
                            number: 30, 
                            shoe: 14,
                            points: 12,
                            Rebounds: 12,
                            Assists: 12,
                            Steals: 12,
                            Blocks: 12,
                            SlamDunks: 7 
                        },
                    "Brook Lopez":{
                            number: 11, 
                            shoe: 17,
                            points: 17,
                            Rebounds: 19,
                            Assists: 10,
                            Steals: 6,
                            Blocks: 8,
                            SlamDunks: 5 
                        },
                    "Mason Plumlee":{
                            number: 1, 
                            shoe: 19,
                            points: 26,
                            Rebounds: 12,
                            Assists: 6,
                            Steals: 3,
                            Blocks: 8,
                            SlamDunks: 5 
                        },
                    "Jason Terry":{
                            number: 31, 
                            shoe: 15,
                            points: 19,
                            Rebounds: 2,
                            Assists: 2,
                            Steals: 4,
                            Blocks: 11,
                            SlamDunks: 1 
                        }
        }
        },
        away: 
            { teamName:"Charlotte Hornets",
                colors:["Turquoise", "Purple"],
                players:{
                    "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points:10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    SlamDunks: 2 
                },    
                    "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points:12,
                    Rebounds: 4,
                    Assists: 1,
                    Steals: 7,
                    Blocks: 7,
                    SlamDunks: 10 
                },    
                    "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points:24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 5,
                    Blocks: 5,
                    SlamDunks: 5 
                },      
                    "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points:33,
                    Rebounds: 3,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 1,
                    SlamDunks: 0 
                },    
                    "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    SlamDunks: 7 
                }    
            }
        } 
    }
}

// function homeTeamName(){
//   return gameObject()['home']['teamName']
// }

// function someFunction() {
//     const object = gameObject();
//     return object.home
// }
// someFunction()

function numPointsScored(playerName) {
    const foundPlayer = playerStats(playerName)
    return foundPlayer.points
    // const object = gameObject()
    // const isHomePlayer = object.home.players[playerName]
    // const isAwayPlayer = object.away.players[playerName]
    //below is the original helper function to decide if a player is home or away
    // if (isHomePlayer) {
    //     return isHomePlayer.points
    // }
    // else {
    //     return isAwayPlayer.points
    // }
    //this is the ternary version (not working?):
    // isHomePlayer ? isHomePlayer.points : isAwayPlayer.points
    //debugger
}
//numPointsScored('Ben Gordon')

function showSize(playerName) {
    const object = gameObject()
    const isHomePlayer = object.home.players[playerName]
    
    
    if (isHomePlayer) {
        return isHomePlayer.shoe
    }
    else {
        const isAwayPlayer = object.away.players[playerName]
        return isAwayPlayer.shoe
    }
    
}
//showSize('Ben Gordon')

function playerStats(playerName){
    const object = gameObject()
    const isHomePlayer = object.home.players[playerName]
    if (isHomePlayer) {
        return isHomePlayer
    }
    else {
        const isAwayPlayer = object.away.players[playerName]
        return isAwayPlayer
    }   
}
//playerStats('Ben Gordon')

function teamColors(teamName) {
    const object = gameObject()
    if (object.home.teamName === teamName) {
        return object.home.colors
    }
    else {
        return object.away.colors
    }
}
teamColors('Charlotte Hornets')

function playerNumbers(teamName) {
    const object = gameObject();
    for (let property in object) {
        if (object[property].teamName === teamName) {
            const arrtofPlayersObjects = Object.values(object[property].players)
            return arrtofPlayersObjects.map((playerObject) => playerObject.number)
            // const arryOfPlayerNames = Object.keys(object[property].players)
            // arryOfPlayerNames.map((name) => {
            //     return object[property].players[name].number
                
            }
        }
    }


const teamNames = () => {
    const object = gameObject()
    const teamNamesArry = []
    for (const property in object) {
        teamNamesArry.push(object[property].teamName)
    }
    return teamNamesArry
}
teamNames()

function bigShoeRebounds () {
    const foundPlayer = findBiggestShoe()
    //console.log(foundPlayer)
    return foundPlayer.Rebounds
}

function findBiggestShoe() {
    const object = gameObject()
    const homeTeamPlayers = Object.values(object.home.players)
    const awayTeamPlayers = Object.values(object.away.players)
    const allPlayers = [...homeTeamPlayers, ...awayTeamPlayers]
    //                      using the forEach method:
    //let largest = allPlayers
    // allPlayers.forEach(player => {
    //     if (player.shoe > largest.shoe) {
    //         largest = player
    //     }
    // })
    //console.log(largest)
    //                      using the sort method:
    allPlayers.sort((a,b)=> (a.shoe < b.shoe ? 1 : -1))
    //console.log(allPlayers)
    return allPlayers[0]
}
bigShoeRebounds()