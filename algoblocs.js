//A1
// initialisation
setPos(300,300);
changeColor(color.red);
faceDown();
setLineWidth(10);
//Réalisation
/*
//A1
forward(100);
faceRight();
forward(50);

//A2
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


//A3
forward(100);
faceUp();
forward(200);
faceDown();
forward(100);
faceLeft()
forward(100);
faceRight()
forward(200);

//A4
setPos(200,500);
faceRight();
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);

//A5
changeColor(color.fuchsia);
faceRight();
arcRight(100,360);
arcRight(50,180);
arcLeft(50,180);

//A6
changeColor(color.blue)
faceUp();
forward(50);
up();
forward(50);
down();
forward(150);

//A7
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);

//A8
faceUp();
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);

//A9
setPos(200,400);
changeColor(color.blue);
faceRight();
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180);

//A10
changeColor(color.red);
faceRight();
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(150,180);

//A11
//Initialisation
setPos(150,200);
faceUp();
changeColor(color.blue);

//réalisation
arcRight(50,180);
up();
faceRight();
forward(50);
down();
faceUp();
arcRight(50,180);
up();
forward(50);
faceLeft();
forward(25);
faceDown();
down();
changeColor(color.fuchsia);
arcRight(100,180);

//A12
//Initialisation
setPos(20,300);
changeColor(color.green);
faceUp();

//Réalisation
arcRight(50,180);
forward(100);
arcLeft(50,180);
faceRight();
up();
forward(50);
faceDown()
changeColor(color.red)
down();
arcLeft(50,180);
forward(100);
arcRight(50,180);


//B1
// initialisation
changeColor(color.green);
setPos(100,100);
faceRight();
// Réalisation
for(let i = 0; i<4; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();    
}

//B2
// Initialisation
changeColor(color.red);
setPos(50,300);

// Réalisation
for(let i=0; i<4; i++){
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
}

//B3
// Initialisation
changeColor(color.blue);
setPos(250,250);
faceRight();
// Réalisation
for(let i=0; i<4; i++) {
    forward(100);
    right(90);
}

//B4
// Initialisation
faceRight();
setPos(200,300);
// Réalisation
for (let i=0; i<3; i++){
    forward(100);
    left(180-60);
}

//B5
//Initialisation
setPos(300,300);
faceUp();
changeColor(color.yellow);
//Réalisation
forward(150);
changeColor(color.red);
for (let i=0; i<3; i++){
    forward(100);
    right(180-60);
}

//B6
// Initialisation
setPos(200,350);
faceRight();
changeColor(color.red);

//Réalisation
for (let i=0; i<2; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for (let i=0; i<3; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}

//B7
//Initialisation
setPos(300,300);
faceRight();
changeColor(color.red);

//Réalisation
for (let i=0; i<3; i++){
    forward(100);
    left(180-60);
}
faceDown()
for (let i=0; i<4; i++){
    forward(100);
    left(90);
}

//B8
//Initialisation
setPos(200,200);
changeColor(color.green);
faceRight();

//Réalisation
for (let i=0; i<8; i++){
    forward(200);
    right(180-45)
}

//B9
//Initialisation
setPos(100,300)
faceRight();
changeColor(color.fuchsia)

//Réalisation
forward(50);
up();
forward(50);
down();
for (let i=0; i<3; i++){
    forward(50);
    right(180-60);
}

//B10
//Initialisation
setPos(50,300);
changeColor(color.blue)
faceRight();

//Réalisation
for (let i=0; i<8; i++){
    forward(100);
    right(180-45);
}
up();
forward(200);
down();
changeColor(color.yellow)
for (let i=0; i<8; i++){
    forward(200);
    left(180-45);
}
up();
right(90);
forward(150);
down();
changeColor(color.fuchsia)
for (let i=0; i<8; i++){
    forward(100);
    right(180-45);
}

//B11
//initialisation
setPos(200,200);
changeColor(color.red);
faceRight();

//Réalisation
for (let i=0; i<4; i++){
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}

//B12
//initialisation
setPos(350,350);
faceRight();
changeColor(color.blue)

//Réalisation
for (let i=0; i<3; i++){
    right(90);
    forward(50);
}
up();
forward(100);
down();
changeColor(color.green);
for (let i=0; i<3; i++){
    forward(50);
    right(90);
}

//B13
//Initialisation
setPos(160,200);
faceRight();
changeColor(color.green);

//Réalisation
for (let i=0; i<8; i++){
    forward(100);
    left(180-45);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

//B14
//Initialisation
faceRight();
setPos(50,50);
changeColor(color.green);

//Réalisation
forward(50);
for (let i=0; i<5; i++){
right(180-60);
forward(100);
left(180-60);
forward(100);
}

//B15
//Initialisation
faceRight();

//Réalisation
for (let i=0; i<4; i++){
    forward(100);
    arcLeft(50,90);
}

//B16
//Initialisattion
setPos(50,500);
faceRight();
changeColor(color.green);

//Réalisation
arcLeft(400,90);
faceLeft();
for (let i=0; i<4; i++){
    arcLeft(50,90);
    arcRight(50,90);
}

//B17
//Initialisation
setPos(200,300);
changeColor(color.blue);
faceRight();

//Réalisation
for (let i=0; i<6; i++){
    arcLeft(50,180);
    left(180-60);
}

//B18
//Initialisation
setPos(150,400);
faceRight();
changeColor(color.yellow);

//Réalisation
for (let i=0; i<8; i++){
    forward(400);
    left(90);
    forward(100);
    left(180-135);
}

//B19
//Initialisation
changeColor(color.blue);
setPos(300,550);
faceRight();

//Réalisation
for (let i=0; i<4;i++){
arcLeft(50,180);
faceRight();
}
up();
faceUp();
forward(50);
faceLeft();
down()
for(let i=0; i<4; i++){
    arcLeft(50,180);
    faceLeft();
}

//B20
//Initialisation
changeColor(color.blue);
setPos(100,250);

//Réalisation
for (let i=0; i<2; i++){
    forward(200);
    arcLeft(100,90);
}
forward(100);
for (let i=0; i<2; i++){
    forward(200);
    arcLeft(100,90);
}
forward(100);
faceRight();
forward(400);
up();
faceLeft();
forward(200);
arcLeft(25,180);
down();
arcRight(100,360);

//B21
//Initialisation
shiftColor(0.6);
setPos(350,150);
faceRight();

//Réalisation
for (let i=0; i<6; i++){
    forward(100);
    left(180-60);
    forward(50);
    left(180-60);
    forward(100);
    right(180-120);
    forward(50);
    right(180-60);
    forward(50);
    shiftColor(0.1);
    up();
    right(180-60);
    forward(100);
    down();
}

//B22
//Initialisation
changeColor(color.yellow);
faceLeft();
right(180-30);

//Réalisation
for (let i=0; i<6; i++){
    forward(100);
    left(180-120);
}
changeColor(color.red);
right(90);
for (let i=0; i<3; i++){
    forward(100);
    right(180-60);
}
changeColor(color.green);
for (let i=0; i<4; i++){
    forward(100);
    left(90);
}
right(180-120);
for(let i=0; i<4; i++){
    forward(100);
    right(90);
}

//B23
//Initialisation
setPos(100,300);
changeColor(color.fuchsia);
left(180-45);

//Réalisation
for (let i=0; i<3; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(180-45);
forward(50);
right(180-135);
for (let i=0; i<3; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(180-45);
forward(50);

//B24
//Initialisation
setPos(200,200);
faceRight();

//Réalisation
for (let i=0; i<8; i++){
    forward(100);
    left(180-45);
}
forward(50);
changeColor(color.green);
for (let i=0;i<3; i++){
    right(180-45);
    forward(100);
    left(180-45);
    forward(50);
}
forward(50);
right(90);
for (let i=0; i<2;i++){
    forward(25);
    left(90);
}
forward(25); 
right(90);
forward(50);
for (let i=0; i<3; i++){
    forward(50);
    left(180-45);
    forward(100);
    right(180-45);
}

//C1
//Initialisation
setPos(20,300);
changeColor(color.blue);
faceRight();

//Réalisation
for (let i=0; i<4; i++){
    for (let j=0; j<3; j++){
        forward(100);
        right(180-60);
    }
    forward(100);
}

//C2
//Initialisation
setPos(250,580);
faceUp();
changeColor(color.fuchsia);

//Réalisation
for (let i=0; i<5; i++){
    for (let j=0; j<4; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}

//C3 
//Initialisation
shiftColor(0.3);
setPos(20,300);
faceRight();

//Réalisation
for (let i=0; i<3; i++){
   for (let j=0; j<8; j++){ 
    forward(100);
    left(180-45);
    }
    up();
    forward(200);
    shiftColor(0.15);
    down()
}

//C4
//Initialisation
changeColor(color.red);
setPos(20,300);
faceRight();

//réalisation
for (let i=0; i<5; i++){
    for (let j=0; j<3; j++){
        forward(50);
        left(180-60);
    }
    changeColor(color.fuchsia);
    for (let i=0; i<4; i++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    changeColor(color.red);
    down();
}

//C5
//Initialisation
setPos(300,300);
shiftColor(0.15);
faceRight();

//Réalisationt
for (let i=0; i<4; i++){
    for (let j=0; j<8; j++){
        forward(200);
        left(180-45);
    }
    shiftColor(0.25);
    right(90);
}

//C6
//Initialisation
setPos(300,300);
faceRight();
changeColor(color.yellow);

//Réalisation
for (let i=0; i<3; i++){
    for (let j=0; j<4; j++){
        forward(100);
        left(180-60);
    }
    forward(100);
}

//C7
//Initialisation
setPos(300,400);
faceRight();
changeColor(color.red);

//Réalisation
for (let i=0; i<8; i++){
    for (let j=0; j<3; j++){
        forward(100);
        right(180-60)
    }
    forward(100);
    left(180-135)
}

//C8
//Initialisation
setPos(300,580);
faceUp();
changeColor(color.green);

//Réalisation
forward(300);
right(180-135);
for(let i=0; i<4; i++){
    changeColor(color.red);
    for (let j=0; j<3; j++){
        forward(100);
        right(180-60);
    }
    changeColor(color.yellow);
    forward(100);
    left(90);
}

//C9
//Initialisation
setPos(400,400);
faceRight();
changeColor(color.green);

//Réalisation
for (let i=0; i<3;i++){
    for (let j=0; j<3; j++){
        for (let h=0; h<4; h++){
            right(90);
            forward(100);
        }
        forward(100);
        right(180-60);
    }
    left(180-60);
    forward(250);
}

//C10
//initialisation
changeColor(color.red);
setPos(300,70);

//Réalisation
for (let i=0;i<4; i++){
    for (let j=0; j<4; j++){
        forward(50);
        for (let h=0; h<4; h++){
            left(90);
            forward(25);
        }
        right(90);
    }
    forward(100);
}

//C11
//Initialisation
setPos(250,200);
shiftColor(0.6);
faceRight();

//Réalisation
for (let i=0; i<6; i++){
    for (let j=0; j<6; j++){
        for (let k=0; k<3; k++){
            forward(50);
            left(180-60);
        }
        forward(50);
        left(180-120);
    }
    up();
    forward(100);
    right(180-120);
    down();
    shiftColor(0.1);
}

//C12
//Initialisation
setPos(300,250);
changeColor(color.yellow);
faceRight();

//Réalisation
for (let i=0; i<4; i++){
    for (let j=0; j<2; j++){
        arcLeft(50,90);
        forward(50);
        left(90);
    }
    arcRight(50,45);
}
changeColor(color.blue);
arcRight(50,180);
left(180-60);
arcLeft(100,300);

//D9
//Initialisation
let longueurD9;
faceRight();
setPos(300,300);
changeColor(color.blue);

//Réalisation
longueurD9 = 50;
for (let i=0; i<6; i++){
    forward(longueurD9);
    right(180-60);
    longueurD9 = longueurD9 +50;
}

//D10
//Initialisation
let longueurD10;
faceRight();
setPos(300,300);
changeColor(color.yellow);

//Réalisation
longueurD10 = 50;
for (let i=0; i<10; i++){
    forward(longueurD10);
    right(90);
    longueurD10 = longueurD10 + 25;
}

//D11
//Initialisation
let longueurD11;
setPos(20,300);
faceRight();

//Réalisation
longueurD11 = 125;
for (let i=0; i<5; i++){
    for (let j=0; j<3; j++){
        forward(longueurD11);
        left(180-60);
    }
    forward(longueurD11);
    longueurD11 = longueurD11 - 25;
}

//D12
//initialisation
setPos(300,350);
changeColor(color.blue);
faceRight()
let longueurD12

//Réalisation
longueurD12 = 50;
for (let i=0; i<6; i++){
    for (let j=0; j<3; j++){
        forward(longueurD12);
        left(180-60);
    }
    forward(longueurD12);
    left(180-120);
    longueurD12 = longueurD12+25;
}

//D13
//Initialisation
let rayonD13;
faceRight();

//Réalisation
rayonD13 = 50;
for (let i=0; i<8; i++){
    arcRight(rayonD13,180)
    up();
    forward(50);
    rayonD13 = rayonD13+25;
    down();
}

//D14
//Initialisation
let longueurD14;
setPos(50,300);
changeColor(color.green);
left(180-45);

//Réalisation
for (let i=0; i<2; i++){
    longueurD14 = 25;
    for (let j=0; j<4; j++){
        forward(longueurD14);
        right(90);
        forward(longueurD14);
        left(90);
        longueurD14 = longueurD14+25
    }
    right(180);   
}

//D15
//Initialisation
let longueurD15;
let angleD15;

//Réalisation
longueurD15=100;
angleD15= 90;
for (let i=0; i<10; i++){
    forward(longueurD15);
    left(angleD15);
    longueurD15= longueurD15+20;
    angleD15 = angleD15-5;
}

//D16
//Initialisation
changeColor(color.green);
let rayonD16;

//Réalisation
rayonD16 = 50
forward(100);
right(180-60);
forward(50);
faceLeft();
for (let i=0; i<3; i++){
    forward(50);
    right(90);
}
left(180-60);
forward(50);
changeColor(color.red);
faceRight();
up();
forward(50);
for (let i=0; i<2; i++){
    down();
    arcRight(rayonD16, 180);
    faceUp();
    up();
    forward(150);
    faceRight();
    rayonD16 = rayonD16 + 50;
}
faceUp();
forward(100);
faceRight();
down();
rayonD16 = 150;
arcRight(rayonD16,180);
*/


