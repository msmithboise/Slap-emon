let Squirtle = {
    name: 'Squirtle',
    hp: 100,
    hits: 0,
    items: [],
    img: 'opponentfront.png'
}
let Wartortle = {
    name: 'Wartortle',
    hp: 300,
    hits: 0,
    items: [],
    img: 'wartortle.png'
}
let Blastoise = {
    name: 'Blastoise',
    hp: 600,
    hits: 0,
    items: [],
    img: 'blastoise.png'
}
let currentTarget = Squirtle

let hero = {
    heroStatus: 0,
    heroImg: ["", "charmeleon.png", 'charizard.png']
}

let items = {
    protect: { name: "Protect", modifier: -2, description: "Protect!" },
    Burn: { name: "Shieldbreak", modifier: 2, description: "Burn!" },
    Waterstone: { name: "Heal", modifier: 2, description: "He's Evolving..." }
}


function giveProtect() {
    currentTarget.items.push(items.protect)
    console.log(currentTarget.items)
}

function giveBurn() {
    currentTarget.items.push(items.Burn)
}

function giveWaterstone() {
    currentTarget.items.push(items.Waterstone)
}

function addMods() {
    var total = 0

    for (let i = 0; i < currentTarget.items.length; i++) {
        let item = currentTarget.items[i];
        total += item.modifier
    }
    return total
}



function hits() {
    currentTarget.hits += 1

}


function slap() {
    currentTarget.hp -= 1
        + addMods();
    hits(currentTarget.hits)
    update(currentTarget.hp)
}


function fireball() {
    currentTarget.hp -= 5
        + addMods();
    hits(currentTarget.hits)
    update(currentTarget.hp)
}


function firestorm() {
    currentTarget.hp -= 10
        + addMods();
    update(currentTarget.hp)
    hits(currentTarget.hits)
}

function evolve() {
    if (currentTarget.hp < 1) {
        if (currentTarget == Squirtle) {
            currentTarget = Wartortle


        } else if (currentTarget == Wartortle) {
            currentTarget = Blastoise
        }

    }
}


function playerEvolve(){
    hero.heroStatus++
    if(hero.heroStatus > hero.heroImg.length - 1){
        hero.heroStatus = hero.heroImg.length -1
    }
    document.getElementById("hero").setAttribute('src', hero.heroImg[hero.heroStatus])
}








function update() {
    evolve()
    document.getElementById("health").innerHTML = currentTarget.hp;
    document.getElementById("hits").innerHTML = currentTarget.hits;
    document.getElementById("name").innerHTML = currentTarget.name;
    document.getElementById("opp").src = currentTarget.img;
}
update()