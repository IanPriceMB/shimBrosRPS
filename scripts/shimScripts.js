$(document).ready(function() {
//////////////////////////////////////////////////////////////////FIRE BASE////////////////////////////////////////////////////////////////////////////////////////////
var config = {
    apiKey: "AIzaSyD1BtlOHUaCZjFJ-no_mopkv7rWCJMTQC4",
    authDomain: "shimrps.firebaseapp.com",
    databaseURL: "https://shimrps.firebaseio.com",
    projectId: "shimrps",
    storageBucket: "shimrps.appspot.com",
    messagingSenderId: "583323616956"
};

firebase.initializeApp(config);

var database = firebase.database();
var gamesRef = database.ref("/Games");
var counterRef = database.ref("/Counter")
var connectedRef = database.ref(".info/connected");

///////////////////////////////////////////////////////////////////LANDING PAGE/////////////////////////////////////////////////////////////////////////////////////
    $("body").append("<container class='godCont'>")

function frontPage(){

    $(".godCont").append("<div class='header'>");
    $(".header").append("<h1 class='title'>");
    $(".title").text("Shimada Bro's: Rock, Paper, Scissors!");

    $(".godCont").append("<div class='leftBro'>");
    $(".leftBro").append("<video class='leftVid' autoplay muted loop>");
    $(".leftVid").append("<source id='leftSrc' src='SBRPS/Animations/GenjiAnimationAqua.mp4'>");

    $(".godCont").append("<button class='start'>");
    $(".start").append("<h2 class='forStart'>");
    $(".forStart").text("START!");

    $(".godCont").append("<div class='rightBro'>");
    $(".rightBro").append("<video class='rightVid' autoplay muted loop>");
    $(".rightVid").append("<source id='leftSrc' src='SBRPS/Animations/HanzoAnimationAqua.mp4' type='video/mp4'>");

    $("body").append("<div class='music'>");
    $(".music").append("<audio id='forMusic' autoplay loop>");
    $("#forMusic").append("<source id='src' src='SBRPS/SoundEffects/MainMusic.mp3'>");

    $("body").append("<div class='footer'>");
    $(".footer").append("<h6 class='forFooter'>");
    $(".forFooter").text("Created by: Ian 'MaddBuddha' Price");
}
frontPage();
$("body").on("click", ".start", function(){
    $(".godCont").empty();
    // document.getElementById("forMusic").play();
    mainScreen();
})

//////////////////////////////////////////////////////////////////CHARACTER SELECT//////////////////////////////////////////////////////////////////////////////

function mainScreen(){

    $(".godCont").append("<div class='header'>");
    $(".header").append("<h1 class='title'>");
    $(".title").text("Shimada Bro's: Rock, Paper, Scissors!");

    $(".godCont").append("<div class='infoDiv'>");
    $(".infoDiv").append("<h3 class='info'>");
    $(".info").text("Enter your name and select your character to start!");

    $(".godCont").append("<form class='playerNameInput'>");
    $(".playerNameInput").append("<div class='formRow'>");
    $(".formRow").append("<label id='tag' for='playerName'>");
    $("#tag").text("Choose Your Name!");
    $(".formRow").append("<input class='formInput' id='playerName' type='text' maxlength='8'>");

$(".godCont").append("<div class='heroChoice'>");
    for (var i = 0; i < characters.length; i++){
        $(".heroChoice").append("<div class='hero' id='" + characters[i].Name + "'>");
        $("#" + characters[i].Name).append("<img id='hero" + characters[i].Name + "'>");
        $("#hero" + characters[i].Name).attr("src", characters[i].Picture)
        $("#" + characters[i].Name).attr("data-number", i);
    }
}

//making sure our player picks a name and a hero before moving to the game screen
var playerName;
var playerCharacter;
var g;
var gameID = "game" + g;

var player = {
    PlayerR1HP: 5,
    PlayerR2HP: 5,
    PlayerR3HP: 5,
    PlayerChoice: "RPS-Value"
}
function newGame() {
    gamesRef.push({
    turn: 1,
    empty: true,
    NepalPics: [],
    round1: true,
    round2: false,
    round3: false,
    player1: "eh",
    player2: "eh"
    })
}

$("body").on("click", ".hero", function(event){
    event.preventDefault();
    var name = $("#playerName").val().trim();
    if (name == false){
        $(".godCont").empty();

        $(".godCont").append("<div class='header'>");
        $(".header").append("<h1 class='title'>");
        $(".title").text("Shimada Bro's: Rock, Paper, Scissors!");

        $(".godCont").append("<div class='noName'>");
        $(".noName").append("<h2 class='pickName'>");
        $(".pickName").text("Pick a name or you can't play.");
        $(".noName").append("<button class='ok'>");
        $(".ok").text("OK");
        $("body").on("click", ".ok", function(){
            $(".godCont").empty();
            mainScreen();
        })
    } else {
        database.ref().once("value", function(snapshot){ 
            if (snapshot.exists() == false){
                newGame();
            }
        }) 
        gamesRef.on("child_added", function(snapshot){
            snapshot.ref.update({ player1: player })
        })
        playerName = name;
        playerCharacter = $(this).attr("data-number");
        gameScreen();
        }
})

/////////////////////////////////////////////////////////////////////GAME SCREEN///////////////////////////////////////////////////////////////////////////
//creating and populating the actual game screen for RPS
function gameScreen(){
    $(".godCont").empty();
    $("body").css("background-image",  "URL('SBRPS/NepalPictures/NepalA.jpg')"); 
//puting in a header
    $(".godCont").append("<div class='header'>");
    $(".header").append("<h1 class='title'>");
    $(".title").text("Shimada Bro's: Rock, Paper, Scissors!");
//player 1 setup
//putting in player name
    $(".godCont").append("<div class='player1'>");
    $(".player1").append("<div class='chosenName' id='player1ChosenName'>");
    $("#player1ChosenName").append("<h4 id='forNamePlayer1'>");
    $("#forNamePlayer1").text(playerName);
//grabbign the animated character
    $(".player1").append("<div class='heroPeach'>");
    $(".heroPeach").append("<video class='player1Peach' autoplay muted loop>");
    $(".player1Peach").append("<source id='player1PeachSrc' src='" + characters[playerCharacter].Peach + "'>");
//creating zone form my RPS icon divs
    $(".player1").append("<div class='player1RPS'>");
//makes the divs with icons and appends to rps zone for player 1
var choices = ["Rock", "Paper", "Scissors"]
    for (var i = 0; i < choices.length; i++){
        RPS = choices[i];
        $(".player1RPS").append("<div class='choiceDiv'  id='player1" + RPS + "'>");
        $("#player1" + RPS).append("<img class='icon' src='" + characters[playerCharacter][RPS] + "'>")
        $("#player1" + RPS).attr("RPS-Value", i);
        $("#player1" + RPS).append("<p class='RPSTitles' id='player1" + RPS + "value'>");
        $("#player1" + RPS + "value").text(RPS);
    }
//player 2 setup
//putting in player name
    $(".godCont").append("<div class='player2'>");
    $(".player2").append("<div class='chosenName' id='player2ChosenName'>");
    $("#player2ChosenName").append("<h4 id='forNamePlayer2'>");
    $("#forNamePlayer2").text(playerName);
//grabbign the animated character
    $(".player2").append("<div class='hero2Peach'>");
    $(".hero2Peach").append("<video class='player2Peach' autoplay muted loop>");
    $(".player2Peach").append("<source id='player2PeachSrc' src='" + characters[playerCharacter].Peach + "'>");
//creating zones form my RPS icons
    $(".player2").append("<div class='player2RPS'>");
//makes the divs with icons and appends to rps zone for player 2
    for (var i = 0; i < choices.length; i++){
        var RPS = choices[i];
        $(".player2RPS").append("<div class='choiceDiv' id='player2" + RPS + "'>");
        $("#player2" + RPS).append("<img class='icon' src='" + characters[playerCharacter][RPS] + "'>")
        $("#player2" + RPS).attr("RPS-Value", i);
        $("#player2" + RPS).append("<p class='RPSTitles' id='player2" + RPS + "value'>");
        $("#player2" + RPS + "value").text(RPS);
    }
}
})