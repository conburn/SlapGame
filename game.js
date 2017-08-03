var app = {
    controllers: {
        gameController: new GameController()
    }
<<<<<<< HEAD
=======

    var buttons = `
        <div class="col-xs-12">
            <div class="bu">
                <button id="kick" type="button" class="btn btn-neutral" onclick="kick(${stat.id}); clickGo('Kick')">Kick</button>
                <button id="punch" type="button" class="btn btn-neutral" onclick="punch(${stat.id}); clickGo('Punch')">Punch</button>
                <button id="choke" type="button" class="btn btn-neutral" onclick="choke(${stat.id}); clickGo('Choke')">Choke</button>
                <button id="compliment" type="button" class="btn btn-neutral" onclick="verbal(${stat.id}); clickGo('Compliment')">Compliment</button>
                <button id="burn" type="button" class="btn btn-neutral" onclick="burn(${stat.id}); clickGo('Burn')">Burn Office Down</button>
                <button id="reset" type="button" class="btn btn-neutral" onclick="newBegin(${stat.id}); clickGo('Reset')">RESET</button>
            </div>
        </div>
    `

    document.getElementById('stats').innerHTML = template
    document.getElementById('buttons').innerHTML = buttons
}

draw(fightThings.stats)

function verbal(statId) {
    var jerryVerb = findFightById(fightThings.stats, statId)
    jerryVerb.health++
    if (jerryVerb.health >= 100) {
        jerryVerb.health = 100
    }
    draw(fightThings.stats)
}

function kick(statId) {
    var jerryKick = findFightById(fightThings.stats, statId)
    jerryKick.hitCount++
    jerryKick.health = jerryKick.health - 2
    if (jerryKick.health <= 0) {
        jerryKick.health = 0
        jerryKick.hitCount = 0
    }

    draw(fightThings.stats)
}

function punch(statId) {
    var jerryPunch = findFightById(fightThings.stats, statId)
    jerryPunch.hitCount++
    jerryPunch.health = jerryPunch.health - 5
    if (jerryPunch.health <= 0) {
        jerryPunch.health = 0
        jerryPunch.hitCount = 0

    }
    draw(fightThings.stats)
}

function choke(statId) {
    var jerryChoke = findFightById(fightThings.stats, statId)
    jerryChoke.hitCount++
    jerryChoke.health = jerryChoke.health - 10
    if (jerryChoke.health <= 0) {
        jerryChoke.health = 0
        jerryChoke.hitCount = 0
    }
    draw(fightThings.stats)
}

function burn(statId) {
    var jerryBurn = findFightById(fightThings.stats, statId)
    jerryBurn.health = 0
    draw(fightThings.stats)
    if (jerryBurn.health <= 0) {
        jerryBurn.health = 0
        jerryBurn.hitCount = 0
    }
}

function newBegin(statId) {
    var jerryNew = findFightById(fightThings.stats, statId)
    jerryNew.hitCount = 0
    jerryNew.health = 100
    draw(fightThings.stats)
}

function findFightById(statArray, statId) {
    for (var i = 0; i < statArray.length; i++) {
        var stat = statArray[i]
        if (statId === statId) {
            return stat
        }
    }
}

//Things which allow Jerry to fight back

var kic = document.getElementById('kick')
var punc = document.getElementById('punch')
var chok = document.getElementById('choke')
var comp = document.getElementById('compliment')
var bur = document.getElementById('burn')
var rese = document.getElementById('reset')
var comm = document.getElementById('commentary')

//chance the (thing).addEventListener if it doesn't work

kic.addEventListener('click', function () {
    clickGo('Kick')
})
punc.addEventListener('click', function () {
    clickGo('Punch')
})
chok.addEventListener('click', function () {
    clickGo('Choke')
})
comp.addEventListener('click', function () {
    clickGo('Compliment')
})
bur.addEventListener('click', function () {
    clickGo('Burn')
})
rese.addEventListener('click', function () {
    clickGo('Reset')
})

function clickGo(yourChoice) {
    var choices = ['Kick', 'Punch', 'Choke']
    var mathStuff = Math.floor(Math.random() * 3)
    var compChoice = choices[mathStuff]

    switch (yourChoice) {
        case 'Kick':
            if (compChoice === 'Kick', 'Punch', 'Choke') {
                commentary.innerHTML = 'Jannett from HR seems fairly disturbed by this brawl... good.'
                break
            }

        case 'Punch':
            if (compChoice === 'Kick', 'Punch', 'Choke') {
                commentary.innerHTML = 'Ow, right in the face!'
                break
            }

        case 'Choke':
            if (compChoice === 'Kick', 'Punch', 'Choke') {
                commentary.innerHTML = 'You, my friend, are brutal.'
                break
            }

        case 'Compliment':
            if (compChoice === 'Kick') {
                commentary.innerHTML = 'What are you doing? I thought you hated this guy! Remember? Tear him to pieces!'
                break
            }
            if (compChoice === 'Punch') {
                commentary.innerHTML = 'Some might call you the bigger man - but the only thing big here is that gash on your face.'
                break
            }
            if (compChoice === 'Choke') {
                commentary.innerHTML = 'How nice of you! I\'m sure your friendly demeanor will be real useful in your grave.'
                break
            }

        case 'Burn':
            if (compChoice === 'Kick', 'Punch', 'Choke', 'Compliment', 'Burn') {
                commentary.innerHTML = 'You complete psychopath! You\'re going away for a long time, sonny boy.'
                break
            }

        case 'Reset':
            if (compChoice === 'Kick', 'Punch', 'Choke', 'Compliment', 'Burn') {
                commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                break
            }
    }

>>>>>>> f5a052b842b6f40004e0d98b127ade5e412dab9e
}