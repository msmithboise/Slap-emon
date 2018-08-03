const Squirtle = {
    name: 'Squirtle',
    hp: 100,
    hits: 0
}




function hits(){
    Squirtle.hits += 1;
}  


function slap(){
 Squirtle.hp -= 1
 hits(Squirtle.hits)
 update(Squirtle.hp)
 }


function fireball(){
    Squirtle.hp -= 5
    update(Squirtle.hp)
}


function firestorm(){
    Squirtle.hp -=10
    update(Squirtle.hp)
}











function update(){
    document.getElementById("health").innerHTML = Squirtle.hp;
   document.getElementById("hits").innerHTML = Squirtle.hits;
    document.getElementById("name").innerHTML = Squirtle.name;
}
update()