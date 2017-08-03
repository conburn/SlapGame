function GameController() {

    var gameService = new GameService()
    var stats = gameService.getStats()

    //private

    var buttons = `
                <div class="col-xs-12">
                    <div class="bu">
                        <button id="kick" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conKick(${1}); app.controllers.gameController.conClickGo('Kick')">Kick</button>
                        <button id="punch" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conPunch(${1}); app.controllers.gameController.conClickGo('Punch')">Punch</button>
                        <button id="choke" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conChoke(${1}); app.controllers.gameController.conClickGo('Choke')">Choke</button>
                        <button id="compliment" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conVerb(${1}); app.controllers.gameController.conClickGo('Compliment')">Compliment</button>
                        <button id="burn" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conBurn(${1}); app.controllers.gameController.conClickGo('Burn')">Burn Office Down</button>
                        <button id="reset" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conNewBegin(${1}); app.controllers.gameController.conClickGo('Reset')">RESET</button>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="bu">
                        <button id="cord" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conCord(${1}); app.controllers.gameController.conClickGo('Cord')">Cord</button>
                        <button id="scissors" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conScissors(${1}); app.controllers.gameController.conClickGo('Scissors')">Scissors</button>
                        <button id="stapler" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conStapler(${1}); app.controllers.gameController.conClickGo('Stapler')">Stapler</button>
                    </div>
                </div>
                `
    var reset = `
                <div class="col-xs-12">
                    <div class="bu">
                        <button id="reset" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conNewBegin(${1}); app.controllers.gameController.conClickGo('Reset')">RESET</button>
                    </div>
                </div>`

    

    function draw() {
        stats = gameService.getStats()
        var template = ''
        if (stats[0].health <= 0 && stats[1].health <= 0) {
            commentary.innerHTML = 'You complete psychopath! Arson is NOT the proper way to win a fight.'
            document.getElementById('buttons').innerHTML = reset
            return
        }
        for (var i = 0; i < stats.length; i++) {
            var stat = stats[i]
            var statusIndex = 0
            if (stat.health === 100) {
                document.getElementById('buttons').innerHTML = buttons
            }
            if (stat.health < 81 && stat.health >= 61) {
                statusIndex = 1
            } else if (stat.health <= 60 && stat.health >= 41) {
                statusIndex = 2
            } else if (stat.health <= 40 && stat.health >= 21) {
                statusIndex = 3
            } else if (stat.health <= 20 && stat.health >= 1) {
                statusIndex = 4
            } else if (stat.health <= 0) {
                statusIndex = 5
                if (stat.id === 1) {
                    commentary.innerHTML = 'You have beaten Jerry. Congratulations. You\'re still fired.'
                } else if (stat.id === 2) {
                    commentary.innerHTML = 'Jerry has beaten you. Congratulations. Your impossible stubborness has cost you your dignity.'
                }
                document.getElementById('buttons').innerHTML = `
                <div class="col-xs-12">
                    <div class="bu">
                        <button id="reset" type="button" class="btn btn-neutral" onclick="app.controllers.gameController.conNewBegin(${1}); app.controllers.gameController.conClickGo('Reset')">RESET</button>
                    </div>
                </div>`

            }
            template += `
                <div class="stat">
                    <div class="col-xs-6">
                        <h3>${stat.name}</h3>
                        <p>Status: ${stat.status[statusIndex]}</p>
                        <p>Health Count: ${stat.health}</p>
                        <p>Hit Count: ${stat.hitCount}</p>
                    </div> 
                </div> `
        }

        document.getElementById('stats').innerHTML = template
    }

    //public

    this.conVerb = function conVerb(statId) {
        gameService.verbal(statId)
        draw()
    }
    this.conKick = function conKick(statId) {
        gameService.kick(statId)
        draw()
    }
    this.conPunch = function conPunch(statId) {
        gameService.punch(statId)
        draw()
    }
    this.conChoke = function conChoke(statId) {
        gameService.choke(statId)
        draw()
    }
    this.conBurn = function conBurn(statId) {
        gameService.burn(statId)
        draw()
    }
    this.conNewBegin = function conNewBegin(statId) {
        gameService.newBegin(statId)
        draw()
    }
    this.conClickGo = function conClickGo(yourChoice) {
        gameService.clickGo(yourChoice)
        draw()
    }
    /*this.conItem = function conItem(item) {
        gameService.getItem(item)
        draw()
    }*/
    draw()
}