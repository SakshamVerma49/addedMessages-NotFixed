var c1
var ai
var i1, i1, i3, i4, k1, k2, k3, k4, k5, p1, p2, p3, w;
var m1 = "You're bad.";
var m2 = "You're weak.";
var m3 = "HA! YOU CAN'T DEFEAT ME.";
var m4 = "You think I'm annoying? No you're the one who is annoying.";
var m5 = "I'm better than you are."
function preload(){
    i1 = loadAnimation("images/idle1.png");
     p1 = loadAnimation("images/punch.png", "images/punch2.png", "images/punch3.png");
    // p2 = loadImage("images/punch2.png");
    // p3 = loadImage("images/punch3.png");
     k1 = loadAnimation("images/kick1.png", "images/kick2.png", "images/kick3.png", "images/kick4.png", "images/kick5.png");
     w = loadImage("images/Witch.png");
}
function setup(){
    createCanvas(displayWidth, displayHeight-200);
    //Sprites
    c1 = createSprite(365, 200);
    ai = createSprite(420,200);

    c1.addAnimation("idle", i1);
     c1.addAnimation("kick", k1);
    
    // c1.addImage("punch1", p1);
    // c1.addImage("punch2", p2);
    // c1.addImage("punch3", p3);
    // c1.addImage("special1", s1);
    // c1.addImage("special2", s2);
    c1.addAnimation("punches", p1);
    ai.addImage("witch", w);
    ai.scale = 0.3;
}
function draw(){
    background("white")
    if(keyIsDown(32)){
        c1.changeAnimation("kick", k1);
    }else if(keyIsDown(76)){
        c1.changeAnimation("punches", p1);
    }else{
        c1.changeAnimation("idle", i1);
    }

    // if(keyIsDown("K")){
    //     c1.changeAnimation();
    // }
    drawSprites();
    text("HOLD SPACE OR HOLD THE L KEY TO HIT THE ANNOYING WITCH", 200, 50);  
    var rand = Math.round(random(1,5));
    if(rand === 1){
        text(m1, 400, 150);
    }
    if(rand === 2){
        text(m2, 400, 150);
    }
    if(rand === 3){
        text(m3, 400, 150);
    }
    if(rand === 4){
        text(m4, 400, 150);
    }
    if(rand === 5){
        text(m5, 400, 150);
    }
}