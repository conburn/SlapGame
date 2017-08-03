function GameService() {

    //private

    var id = 1
    var fightThings = { stats: [] }
    var jerry = new Fight('Jerry')
    var you = new Fight('You')

    var items = {
        cord: new Item('Cord', -5, 'Extra strangling power'),
        scissors: new Item('Scissors', -8, 'Extra stabbing power'),
        stapler: new Item('Stapler', -3, 'Extra bashing power')
    }
    

    function Fight(name) {

        this.id = id
        this.name = name
        this.status = ['Healthy', 'Bruised', 'Bloodied', 'Bashed', 'Broken', 'Dead']
        this.health = 100
        this.hitCount = 0
        this.items = []

        id++

    }

    function Item(name, modifier, description) {

        this.name = name
        this.modifier = modifier
        this.description = description
    }

    fightThings.stats.push(jerry, you)

    function findFightById(statArray, statId) {
        for (var i = 0; i < statArray.length; i++) {
            var stat = statArray[i]
            if (statId === stat.id) {
                return stat
            }
        }
    }

    //public

    var kic = document.getElementById('kick')
    if (kic) {
        kic.addEventListener('click', function () {
            clickGo('Kick')
        })
    }
    var punc = document.getElementById('punch')
    if (punc) {
        punc.addEventListener('click', function () {
            clickGo('Punch')
        })
    }
    var chok = document.getElementById('choke')
    if (chok) {
        chok.addEventListener('click', function () {
            clickGo('Choke')
        })
    }
    var comp = document.getElementById('compliment')
    if (comp) {
        comp.addEventListener('click', function () {
            clickGo('Compliment')
        })
    }
    var bur = document.getElementById('burn')
    if (bur) {
        bur.addEventListener('click', function () {
            clickGo('Burn')
        })
    }
    var rese = document.getElementById('reset')
    if (rese) {
        rese.addEventListener('click', function () {
            clickGo('Reset')
        })
    }
    var comm = document.getElementById('commentary')

    //functions

    this.verbal = function verbal(statId) {
        var personVerb = findFightById(fightThings.stats, statId)
        personVerb.health++
        if (personVerb.health >= 100) {
            personVerb.health = 100
        }
    }

    this.kick = function kick(statId) {
        var personKick = findFightById(fightThings.stats, statId)
        personKick.hitCount++
        personKick.health = personKick.health - 2
        if (personKick.health <= 0) {
            personKick.health = 0
            personKick.hitCount = 0
        }
    }

    this.punch = function punch(statId) {
        var personPunch = findFightById(fightThings.stats, statId)
        personPunch.hitCount++
        personPunch.health = personPunch.health - 5
        if (personPunch.health <= 0) {
            personPunch.health = 0
            personPunch.hitCount = 0

        }
    }

    this.choke = function choke(statId) {
        var personChoke = findFightById(fightThings.stats, statId)
        personChoke.hitCount++
        personChoke.health = personChoke.health - 10
        if (personChoke.health <= 0) {
            personChoke.health = 0
            personChoke.hitCount = 0
        }
    }

    this.burn = function burn(statId) {
        var personBurn = findFightById(fightThings.stats, statId)
        personBurn.health = 0
        if (personBurn.health <= 0) {
            personBurn.health = 0
            personBurn.hitCount = 0
        }
    }

    this.newBegin = function newBegin(statId) {
        var personNew = findFightById(fightThings.stats, statId)
        personNew.hitCount = 0
        personNew.health = 100
    }

    //

    this.clickGo = function clickGo(yourChoice) {
        var choices = ['Kick', 'Punch', 'Choke']
        var mathStuff = Math.floor(Math.random() * 3)
        var compChoice = choices[mathStuff]

        switch (yourChoice) {
            case 'Kick':
                if (compChoice === 'Kick') {
                    app.controllers.gameController.conKick(2)
                    commentary.innerHTML = 'Jannett from HR seems fairly disturbed by this brawl... good.'
                    break
                }
                if (compChoice === 'Punch') {
                    app.controllers.gameController.conPunch(2)
                    commentary.innerHTML = 'Jannett from HR seems fairly disturbed by this brawl... good.'
                    break
                }
                if (compChoice === 'Choke') {
                    app.controllers.gameController.conChoke(2)
                    commentary.innerHTML = 'Jannett from HR seems fairly disturbed by this brawl... good.'
                    break
                }

            case 'Punch':
                if (compChoice === 'Kick') {
                    app.controllers.gameController.conKick(2)
                    commentary.innerHTML = 'Ow, right in the face!'
                    break
                }
                if (compChoice === 'Punch') {
                    app.controllers.gameController.conPunch(2)
                    commentary.innerHTML = 'Ow, right in the face!'
                    break
                }
                if (compChoice === 'Choke') {
                    app.controllers.gameController.conChoke(2)
                    commentary.innerHTML = 'Ow, right in the face!'
                    break
                }

            case 'Choke':
                if (compChoice === 'Kick') {
                    app.controllers.gameController.conKick(2)
                    commentary.innerHTML = 'You, my friend, are brutal.'
                    break
                }
                if (compChoice === 'Punch') {
                    app.controllers.gameController.conPunch(2)
                    commentary.innerHTML = 'You, my friend, are brutal.'
                    break
                }
                if (compChoice === 'Choke') {
                    app.controllers.gameController.conChoke(2)
                    commentary.innerHTML = 'You, my friend, are brutal.'
                    break
                }

            case 'Compliment':
                if (compChoice === 'Kick') {
                    app.controllers.gameController.conKick(2)
                    commentary.innerHTML = 'What are you doing? I thought you hated this guy! Remember? Tear him to pieces!'
                    break
                }
                if (compChoice === 'Punch') {
                    app.controllers.gameController.conPunch(2)
                    commentary.innerHTML = 'Some might call you the bigger man - but the only thing big here is that gash on your face.'
                    break
                }
                if (compChoice === 'Choke') {
                    app.controllers.gameController.conChoke(2)
                    commentary.innerHTML = 'How nice of you! I\'m sure your friendly demeanor will be real useful in your grave.'
                    break
                }

            case 'Burn':
                if (compChoice === 'Kick', 'Punch', 'Choke', 'Compliment', 'Burn') {
                    commentary.innerHTML = 'You complete psychopath! Now everyone\'s dead. Including you!'
                    app.controllers.gameController.conBurn(2)
                    break
                }

            case 'Reset':
                if (compChoice === 'Kick', 'Punch', 'Choke', 'Compliment', 'Burn') {
                    app.controllers.gameController.conNewBegin(2)
                    commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                    break
                }
        }
    }

    this.getStats = function getStats() {
        var fightThingsCopy = JSON.parse(JSON.stringify(fightThings))
        return fightThingsCopy.stats
    }

    this.getItem = function getItem(item) {
        var itemTransfer = JSON.parse(JSON.stringify(items[item]))
        return itemTransfer
    }
}