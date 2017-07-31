var id = 1

function Fight(name) {

    this.id = id
    this.name = name
    this.status = ['Healthy', 'Bruised', 'Bloodied', 'Bashed', 'Broken', 'Dead']
    this.health = 100
    this.hitCount = 0

    id++

}

var fightThings = {
    stats: []
}

var jerry = new Fight('Jerry')
var you = new Fight('You')

fightThings.stats.push(jerry, you)

function draw(stats) {
    var template = ''
    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i]
        var statusIndex = 0
        if (stat.health < 81 && stat.health >= 61) {
            statusIndex = 1
        } else if (stat.health <= 60 && stat.health >= 41) {
            statusIndex = 2
        } else if (stat.health <= 40 && stat.health >= 21) {
            statusIndex = 3
        } else if (stat.health <= 20 && stat.health >= 1) {
            statusIndex = 4
        } else if (stat.health === 0) {
            statusIndex = 5
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
    if (jerryBurn.hitCount <= 0) {
        
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
            if (compChoice === 'Kick') {
                commentary.innerHTML = 'Yowza! An even blow to both sides.'
                break
            }
            if (compChoice === 'Punch') {
                you.punch
                commentary.innerHTML = 'Jannett from HR seems fairly disturbed by this brawl... good.'
                break
            }
            if (compChoice === 'Choke') {
                commentary.innerHTML = 'Food isn\'t the only thing Jerry steals - he also steals your LIFE!'
                break
            }
            if (compChoice === 'Compliment') {
                commentary.innerHTML = 'A stern kick from you yields a compliment - seems like Jerry is a little confused.'
                break
            }
            if (compChoice === 'Burn') {
                commentary.innerHTML = 'Jerry has burned down the office. An absolute psychopath after all.'
                break
            }

        case 'Punch':
            if (compChoice === 'Kick') {
                commentary.innerHTML = 'Jerry hit hard, but you hit harder.'
                break
            }
            if (compChoice === 'Punch') {
                commentary.innerHTML = 'Oh my! A formidable fit from both sides.'
                break
            }
            if (compChoice === 'Choke') {
                commentary.innerHTML = 'Hey, nice punch, but Jerry sure does know how to grab a neck.'
                break
            }
            if (compChoice === 'Compliment') {
                commentary.innerHTML = 'A stern punch from you yields a compliment - seems like Jerry is a little confused.'
                break
            }
            if (compChoice === 'Burn') {
                commentary.innerHTML = 'Jerry has burned down the office. An absolute psychopath after all.'
                break
            }

        case 'Choke':
            if (compChoice === 'Kick') {
                commentary.innerHTML = 'You, my friend, are brutal. Jerry is but a mite.'
                break
            }
            if (compChoice === 'Punch') {
                commentary.innerHTML = 'Wow! Incredible. Yes. Hmm. This is violent.'
                break
            }
            if (compChoice === 'Choke') {
                commentary.innerHTML = 'An even-keeled display of absolute brutality!'
                break
            }
            if (compChoice === 'Compliment') {
                commentary.innerHTML = 'Not sure how Jerry could even open his vocal chords with your hands around his neck.'
                break
            }
            if (compChoice === 'Burn') {
                commentary.innerHTML = 'Jerry has burned down the office. An absolute psychopath after all.'
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
            if (compChoice === 'Compliment') {
                commentary.innerHTML = 'Come on, we didn\'t come here for fun and games - this is a brawl! Get punching!'
                break
            }
            if (compChoice === 'Burn') {
                commentary.innerHTML = 'Jerry has burned down the office. An absolute psychopath after all.'
                break
            }

        case 'Burn':
            if (compChoice === 'Kick') {
                commentary.innerHTML = 'You complete psychopath! You\'re going away for a long time, sonny boy.'
                break
            }
            if (compChoice === 'Punch') {
                commentary.innerHTML = 'You complete psychopath! You\'re going away for a long time, sonny boy.'
                break
            }
            if (compChoice === 'Choke') {
                commentary.innerHTML = 'You complete psychopath! You\'re going away for a long time, sonny boy.'
                break
            }
            if (compChoice === 'Compliment') {
                commentary.innerHTML = 'You complete psychopath! You\'re going away for a long time, sonny boy.'
                break
            }
            if (compChoice === 'Burn') {
                commentary.innerHTML = 'You complete psychopath! You\'re going away for a long time, sonny boy.'
                break
            }

        case 'Reset':
            if (compChoice === 'Kick') {
                commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                break
            }
            if (compChoice === 'Punch') {
                commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                break
            }
            if (compChoice === 'Choke') {
                commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                break
            }
            if (compChoice === 'Compliment') {
                commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                break
            }
            if (compChoice === 'Burn') {
                commentary.innerHTML = 'Can you beat Jerry in the biggest brawl the office has ever seen? Guess we\'ll see...'
                break
            }
    }

}