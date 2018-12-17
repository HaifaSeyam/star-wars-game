$(document).ready(function() {
    //Boolean Variable to identify the character's selection
    var charIsSelected = true;

    //selection indicators to prevent multible selection for the same button
	var fig01SeleIndicator = 0;
	var fig02SeleIndicator = 0;
	var fig03SeleIndicator = 0;
    var fig04SeleIndicator = 0;

    //Attack Sound
    var attackSound = new Audio("assets/sounds/attack.mp3");

/*If Player 01 is selected (button char1 is clicked), the other characters will be moved 
to the enemies area */
$(".char1").on("click",function() {
    if(charIsSelected === true) {
        //Change to false to check for enemies selection 
        charIsSelected = false;
        //Add class=player to the Char1 button
        $(this).addClass("player");
        //change this indicator to one to indicate that --player 01-- has been selected as a player 
        fig01SeleIndicator++;
        // Add the other characters to the enemies area
        $(".char2").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p2").css({"text-align": "center", "font-size":"20px"});
        
        $(".char3").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p3").css({"text-align": "center", "font-size":"20px"});
        
        $(".char4").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p4").css({"text-align": "center", "font-size":"20px"});
        
        $(".charImage").css({"width": "100px", "height": "90px", "margin-left": "auto", 
        "margin-right": "auto", "margin-top": "5px", "display": "block"});		
    } 
    /*If Char1 is not selected as a player, he will be moved to the enemies area, so if 
    the button is clicked (after selecting the palyer), he will be moved to the defender area*/
    else if(charIsSelected === false && fig01SeleIndicator === 0) {
        /*If fighter 01 has not been selected as a player but is selected as an enemy (defender) then 
        change all other indicators to "one" to prevent selecting them as enemies until the selected
        one is defeated*/
        fig02SeleIndicator++;
        fig03SeleIndicator++;
        fig04SeleIndicator++;
        attackBtnDisabled = false;
        $(".char1").appendTo(".defenderArea").addClass("defender")
        .css({"background-color":"white","color":"black"});
        $("#p1").css("text-align", "center");
    }
});
/*If Player 02 is selected (button char2 is clicked), the other characters will be moved 
to the enemies area */
$(".char2").on("click",function() {
    if(charIsSelected === true) {
        $(this).addClass("player");
        fig02SeleIndicator++;
        charIsSelected = false;
        $(".char1").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p1").css({"text-align": "center", "font-size":"20px"});
        
        $(".char3").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p3").css({"text-align": "center", "font-size":"20px"});
        
        $(".char4").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p4").css({"text-align": "center", "font-size":"20px"});
        
        $(".charImage").css({"width": "100px", "height": "90px", "margin-left": "auto", 
        "margin-right": "auto", "margin-top": "5px", "display": "block"});		
    }
    /*If Char2 is not selected as a player, he will be moved to the enemies area, so if 
    the button is clicked (after selecting the palyer), he will be moved to the defender area*/
    else if(charIsSelected === false && fig02SeleIndicator === 0) {
        /*If fighter 02 has not been selected as a player but is selected as an enemy (defender) then 
        change all other indicators to "one" to prevent selecting them as enemies until the selected
        one is defeated*/
        attackBtnDisabled = false;
        fig01SeleIndicator++;
        fig03SeleIndicator++;
        fig04SeleIndicator++;
        $(".char2").appendTo(".defenderArea").addClass("defender")
        .css({"background-color":"white", "color":"black"});
        $("#p2").css("margin-left", "30px");
    }
});
/*If Player 03 is selected (button char3 is clicked), the other characters will be moved 
to the enemies area */
$(".char3").on("click",function() {
    if(charIsSelected === true) {
        $(this).addClass("player");
        fig03SeleIndicator++;
        charIsSelected = false;
        $(".char1").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p1").css({"text-align": "center", "font-size":"20px"});
        
        $(".char2").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p2").css({"text-align": "center", "font-size":"20px"});
        
        $(".char4").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p4").css({"text-align": "center", "font-size":"20px"});
        
        $(".charImage").css({"width": "100px", "height": "90px", "margin-left": "auto", 
        "margin-right": "auto", "margin-top": "5px", "display": "block"});		
    }
    /*If Char3 is not selected as a player, he will be moved to the enemies area, so if 
    the button is clicked (after selecting the palyer), he will be moved to the defender area*/
    else if(charIsSelected === false && fig03SeleIndicator === 0) {
        /*If fighter 03 has not been selected as a player but is selected as an enemy (defender) then 
        change all other indicators to "one" to prevent selecting them as enemies until the selected
        one is defeated*/
        attackBtnDisabled = false;
        fig01SeleIndicator++;
        fig02SeleIndicator++;
        fig04SeleIndicator++;
        $(".char3").appendTo(".defenderArea").addClass("defender")
        .css({"background-color":"white", "color":"black"});
        $("#p3").css("margin-left", "30px");
    }
});
/*If Player 04 is selected (button char4 is clicked), the other characters will be moved 
to the enemies area */
$(".char4").on("click",function() {
    if(charIsSelected === true) {
        $(this).addClass("player");
        fig04SeleIndicator++;
        charIsSelected = false;
        $(".char1").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p1").css({"text-align": "center", "font-size":"20px"});
        
        $(".char2").appendTo(".enemies")
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p2").css({"text-align": "center", "font-size":"20px"});
        
        $('.char3').appendTo('.enemies')
        .css({"height":"200px", "width":"150px", "background-color": "red"});
        $("#p3").css({"text-align": "center", "font-size":"20px"});
    
        $(".charImage").css({"width": "100px", "height": "90px", "margin-left": "auto", 
        "margin-right": "auto", "margin-top": "5px", "display": "block"});	
    }
     /*If Char4 is not selected as a player, he will be moved to the enemies area, so if 
    the button is clicked (after selecting the palyer), he will be moved to the defender area*/
    else if(charIsSelected === false && fig04SeleIndicator === 0) {
        /*If fighter 04 has not been selected as a player but is selected as an enemy (defender) then 
        change all other indicators to "one" to prevent selecting them as enemies until the selected
        one is defeated*/
        attackBtnDisabled = false;
        fig01SeleIndicator++;
        fig02SeleIndicator++;
        fig03SeleIndicator++;
        $(".char4").appendTo(".defenderArea").addClass("defender")
        .css({"background-color":"white", "color":"black"});
        $("#p4").css("margin-left", "30px");
    }
});
});