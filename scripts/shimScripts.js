$(document).ready(function() {
//seting up the landing page and start button functionality
function frontPage(){
//puting in a header
    $(".godCont").append("<div class='header'>");
    $(".header").append("<h1 class='title'>");
    $(".title").text("Shimada Bro's: Rock, Paper, Scissors!");
//puting in our left show video
    $(".godCont").append("<div class='leftBro'>");
    $(".leftBro").append("<video class='leftVid' autoplay muted loop>");
    $(".leftVid").append("<source id='leftSrc' src='SBRPS/Animations/GenjiAnimationAqua.mp4'>");
//our start button for mving to the main game screen
    $(".godCont").append("<button class='start'>");
    $(".start").append("<h2 class='forStart'>");
    $(".forStart").text("START!");
//putin in our right show video
    $(".godCont").append("<div class='rightBro'>");
    $(".rightBro").append("<video class='rightVid' autoplay muted loop>");
    $(".rightVid").append("<source id='leftSrc' src='SBRPS/Animations/HanzoAnimationAqua.mp4' type='video/mp4'>");
//puttin in some music
    $("body").append("<div class='music'>");
    $(".music").append("<audio id='forMusic' autoplay loop>");
    $("#forMusic").append("<source id='src' src='SBRPS/SoundEffects/MainMusic.mp3'>");
//puttin in a footer for some extra info 
    $("body").append("<div class='footer'>");
    $(".footer").append("<h6 class='forFooter>");
    $(".forFooter").text("Created by: Ian 'MaddBuddha' Price");
}
frontPage();
$("body").on("click", ".start", function(){
    $(".godCont").empty();
    document.getElementById("forMusic").play();
    mainScreen();
})
//variables in other js file

function mainScreen(){
//puting in a header
    $(".godCont").append("<div class='header'>");
    $(".header").append("<h1 class='title'>");
    $(".title").text("Shimada Bro's: Rock, Paper, Scissors!");

//creating and populating divs for player name and character selection  
    $(".godCont").append("<form class='playerNameInput'>");
    $(".playerNameInput").append("<div class='formRow'>");
    $(".formRow").append("<label id='tag' for='playerName'>");
    $("#tag").text("Choose Your Name!");
    $(".formRow").append("<input class='formInput' id='playerName' type='text'>");
    $(".submitId").text("Play!");

//put some picture buttons in my heroChoice section    
$(".godCont").append("<div class='heroChoice'>");
    for (var i = 0; i < characters.length; i++){
        $(".heroChoice").append("<div class='hero' id='" + characters[i].Name + "'>");
        $("#" + characters[i].Name).append("<img id='hero" + characters[i].Name + "'>");
        $("#hero" + characters[i].Name).attr("src", characters[i].Picture)
        $("#" + characters[i].Name).attr("data-number", i);
    }

//letting our players know that clicking a hero will send them on
    $(".godCont").append("<div class='infoDiv'>");
    $(".infoDiv").append("<h3 class='info'>");
    $(".info").text("Enter your name into the name field and select your character to start!");

//puttin in a footer for some extra info 
    $("body").append("<div class='footer'>");
    $(".footer").append("<h6 class='forFooter>");
    $(".forFooter").text("Created by: Ian 'MaddBuddha' Price");
}

//making sure our player picks a name and a hero before moving to the game screen
var playerName;
var playerCharacter;
$("body").on("click", ".hero", function(){
    var name = $("#playerName").val().trim();
    console.log(Boolean(name));
    if (name == false){
        $(".godCont").empty();
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
        playerName = $("#playerName").val().trim();
        playerCharacter = $(this).attr("data-number");
        gameScreen();
    }
})

//creating and populating the actual game screen for RPS
function gameScreen(){
    $(".godCont").empty();
//player 1 setup
//grabbign the animated character
    $(".godCont").append("<div class='player1'>");
    $(".player1").append("<div class='heroPeach'>");
    $(".heroPeach").append("<video class='player1Peach' autoplay muted loop>");
    $(".player1Peach").append("<source id='player1PeachSrc' src='" + characters[playerCharacter].Peach + "'>");
//creating zones form my RPS icons
    $(".player1").append("<div class='player1RPS'>");
    $(".player1RPS").append("<div class='player1Rock'>");
    $(".player1RPS").append("<div class='player1paper'>");
    $(".player1RPS").append("<div class='player1scissors'>");
//Rock button
    $(".player1Rock").append("<img src='" + characters[playerCharacter].Rock + "'>")
    $(".player1Rock").append("<p class='player1RockValue'>");
    $(".player1RockValue").text("Rock");
//Paper button
    $(".player1paper").append("<img src='" + characters[playerCharacter].Paper + "'>")
    $(".player1paper").append("<p class='player1PaperValue'>");
    $(".player1PaperValue").text("Paper");
//Scissors button
    $(".player1scissors").append("<img src='" + characters[playerCharacter].Scissors + "'>")
    $(".player1scissors").append("<p class='player1ScissorsValue'>");
    $(".player1ScissorsValue").text("Scissors");


//player 2 setup
//grabbign the animated character
    $(".godCont").append("<div class='player2'>");
    $(".player2").append("<div class='hero2Peach'>");
    $(".heroPeach").append("<video class='player2Peach' autoplay muted loop>");
    $(".player2Peach").append("<source id='player2PeachSrc' src='" + characters[playerCharacter].Peach + "'>");
//creating zones form my RPS icons
    $(".player2").append("<div class='player2RPS'>");
    $(".player2RPS").append("<div class='player2Rock'>");
    $(".player2RPS").append("<div class='player2paper'>");
    $(".player2RPS").append("<div class='player2scissors'>");
//Rock button
    $(".player2Rock").append("<img src='" + characters[playerCharacter].Rock + "'>")
    $(".player2Rock").append("<p class='player2RockValue'>");
    $(".player2RockValue").text("Rock");
//Paper button
    $(".player2paper").append("<img src='" + characters[playerCharacter].Paper + "'>")
    $(".player2paper").append("<p class='player2PaperValue'>");
    $(".player2PaperValue").text("Paper");
//Scissors button
    $(".player2scissors").append("<img src='" + characters[playerCharacter].Scissors + "'>")
    $(".player2scissors").append("<p class='player2ScissorsValue'>");
    $(".player2ScissorsValue").text("Scissors");
}
//on click of the submit button we load the next page with the chosen assets
})