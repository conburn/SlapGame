var id = 1

function Fight(name) {

    this.id = id
    this.name = name
    this.status = ['Healthy', 'Bruised', 'Bashed', 'Bloodied', 'Broken', 'Dead']
    this.health = 100
    this.hitCount = 0

    id++

}

var fightThings = {
    stats: []
}

var jerry = new Fight('Jerry')
var you = new Fight('You')

fightThings.stats.push(jerry)

function draw(stats) {
    var template = ''
    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i]
        var statusIndex = 0
        if(stat.health < 81 && stat.health >=61) {
            statusIndex = 1
        } else if(stat.health <=60 && stat.health >=41) { 
            statusIndex = 2
        } else if(stat.health <=40 && stat.health >=21) {
            statusIndex = 3
        } else if(stat.health <=20 && stat.health >=1) {
            statusIndex = 4
        } else if(stat.health === 0) {
            statusIndex = 5
        }
    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i]
        var statusIn
    }
        template += `
            <div class="stat">
                <div class="row">
                    <div class="col-xs-6">
                        <h3>Jerry</h3>
                        <p>Status: ${stat.status[statusIndex]}</p>
                        <p>Health Count: ${stat.health}</p>
                        <p>Hit Count: ${stat.hitCount}</p>
                    </div>
                    <div class="col-xs-6">
                        <h3>You</h3>
                        <p>Status: ${stat.status[statusIndex]}</p>
                        <p>Health Count: ${stat.health}</p>
                        <p>Hit Count: ${stat.hitCount}</p>
                    </div>
                    <div class="col-xs-12">
                        <button type="button" class="btn btn-danger" onclick="${stat.id}">Verbally Abuse</button>
                        <button type="button" class="btn btn-danger" onclick="kick(${stat.id})">Kick</button>
                        <button type="button" class="btn btn-danger" onclick="hit(${stat.id})">Punch</button>
                        <button type="button" class="btn btn-danger" onclick="hit(${stat.id})">Choke</button>
                        <button type="button" class="btn btn-danger" onclick="${stat.id}">Burn Office Down</button>
                    </div>
                </div>
            </div> `
    }
    document.getElementById('stats').innerHTML = template
}

draw(fightThings.stats)

function kick(statId) {
    var jerryHit = findFightById(fightThings.stats, statId)
    jerryHit.hitCount++
    draw(fightThings.stats)
}