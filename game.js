const Squirtle = {
    name: 'Squirtle',
    hp: 100
}





function slap(){
 Squirtle.hp -= 1
 alert(Squirtle.hp)
}

function update(){
    document.getElementById("health").innerHTML = Squirtle.hp;
}
update()