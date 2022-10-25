class Player{
    constructor(health, damage){
        this.health = health;
        this.damage = damage;
    }
    showStats(){
        let h = this.health;
        let d = this.damage;
        fill(255);
        rect(windowWidth - 250, 38, 200, 80);
        fill(0);
        textSize(32);
        textAlign(LEFT);
        text("Health: " + h, windowWidth - 240, 68);
        text("Damage: " + d, windowWidth - 240, 100);
    }

}

class Zombie{
    constructor(health, damage){
        this.health = health;
        this.damage = damage;
    }
}

function setup(){
    createCanvas(windowWidth - 48, 150);
}

let player = new Player(100, 2);
function draw(){
    player.showStats();
}