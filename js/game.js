//-----Variables Globales-----

// La puse en cero porque sino las tomaria como string ¿?
var tNumber = 0;
var aScore = 0;

var p1 = "";
var p2 = "";
var p3 = "";
var p4 = "";

var wins = 0;
var losses = 0;



//---- Llamada de funciones -----

setUp();

$("#piedra-1").click(function(){
    if (tNumber>aScore){
        aScore += p1;
    }
 $("#aScore").text(aScore);
 check();
});

$("#piedra-2").click(function(){
    if (tNumber>aScore){
        aScore += p2;
    }
 $("#aScore").text(aScore);
 check();
});

$("#piedra-3").click(function(){
    if (tNumber>aScore){
        aScore += p3;
    }
 $("#aScore").text(aScore);
 check();
});

$("#piedra-4").click(function(){
    if (tNumber>aScore){
        aScore += p4;
    }
 $("#aScore").text(aScore);
 check();
});



//----- Funciones -----

function setUp(){
    tNumber = Math.floor(Math.random()*102)+19;
    p1 = Math.floor(Math.random()*12)+1;
    p2 = Math.floor(Math.random()*12)+1;
    p3 = Math.floor(Math.random()*12)+1;
    p4 = Math.floor(Math.random()*12)+1;
    
    $("#tNumber").text(tNumber);
    $("#aScore").text(aScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    };
    
function check(){
    if (aScore>tNumber){
        losses++;
        $("#losses").text(losses);
        clear();
    };
    if (aScore===tNumber){
        wins++;
        $("#wins").text(wins);
        $("#aScore").text(aScore);
        clear();
    }
};

function clear(){
    tNumber = 0;
    aScore = 0;
    setUp();
};