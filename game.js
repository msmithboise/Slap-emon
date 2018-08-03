let Squirtle = {
    name: 'Squirtle',
    hp: 100,
    hits: 0,
    items: []
}

let items ={
    protect: {name: "Protect", modifier: -2, description: "Protect!"},
    Burn: {name: "Shieldbreak", modifier: 2, description: "Burn!"},
    Waterstone: {name: "Heal", modifier: 2, description: "He's Evolving..."}
}


function giveProtect(){
Squirtle.items.push(items.protect)
console.log(Squirtle.items)
}

function giveBurn(){
    Squirtle.items.push(items.Burn)
    }

function giveWaterstone(){
Squirtle.items.push(items.Waterstone)
}

function addMods(){
var total = 0

for (let i = 0; i < Squirtle.items.length; i++) {
    let item = Squirtle.items[i];
    total += item.modifier
}
 return total 
}



function hits(){
    Squirtle.hits += 1 
   
}  


function slap(){
 Squirtle.hp -= 1
 + addMods();
 hits(Squirtle.hits)
 update(Squirtle.hp)
 }


function fireball(){
    Squirtle.hp -= 5
    + addMods();
    hits(Squirtle.hits)
    update(Squirtle.hp)
}


function firestorm(){
    Squirtle.hp -=10
    + addMods();
    update(Squirtle.hp)
    hits(Squirtle.hits)
}











function update(){
    document.getElementById("health").innerHTML = Squirtle.hp;
   document.getElementById("hits").innerHTML = Squirtle.hits;
    document.getElementById("name").innerHTML = Squirtle.name;
}
update()