$(document).ready(function() {
    //Boolean Variable to identify the character's selection
    var charIsSelected = true;

    //selection indicators to prevent multible selection for the same button
	var fig01SeleIndicator = 0;
	var fig02SeleIndicator = 0;
	var fig03SeleIndicator = 0;
    var fig04SeleIndicator = 0;
    
    //Disable button
    var attackBtnDisabled = true;
    var numOfEnemiesDefeated = 0;

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

//The Attack
$(".attackButton").on("click", function() {
    if(attackBtnDisabled === false) {
    attackSound.play();
    /*Defender class is created only when selecting the defender from among the enemies characters 
    so the defName, defHealth and counterAttackPower will hold the values of the name, health points 
    and counter attack power of the selected fighter*/
    var defenderName = $(".defender").attr("charName"); 
    console.log("defender Name" + defenderName);
    var defenderHealth = $(".defender").attr("healthPoints");
    console.log("defender health" + defenderHealth);
    var defenderAttackPower =  $(".defender").attr("attackPowerCounter");
    console.log("defender attack power" + defenderAttackPower);

    /*Player class is created only when selecting the player from among the characters so the 
    playerHealth will hold the value of the healthPoints of the selected player*/
    var playerHealth = $(".player").attr("healthPoints");
    console.log("player health" + playerHealth);
    //playerAttackPower will be equal to the attackPower of the selected player
    var playerAttackPower = $(".player").attr("attackPower");
    console.log("player attack power" + playerAttackPower);

    /*When attack button is cicked, the player's health points reduced by the amount of the defender's
    attackPowerCounter*/
    var playerHealthAfterAttack = playerHealth - defenderAttackPower;
    console.log("player health after attack:  " + playerHealthAfterAttack);

    /*At the same click on the Attack button, the defender healthPoints will be reduced by the amount of 
    playerAttackPower */
    console.log("defender health" + defenderHealth);
    console.log("player Attack Power " + playerAttackPower);
    var defenderHealthAfterAttack = defenderHealth - playerAttackPower;
    console.log("defender health after attack:  " + defenderHealthAfterAttack);

    //Update the player's healthPoints in the html document
    $(".player").attr("healthPoints", playerHealthAfterAttack);
    //Update the defender's healthPoints in the html document
    $(".defender").attr("healthPoints", defenderHealthAfterAttack);
    //Change the player's healthPoint text in the html document 
    $(".player p").html($(".player").attr("healthPoints"));
    //Change the defender's healthPoints text in the html document
    $(".defender p").html($(".defender").attr("healthPoints"));

    //Display attack results on the screen
    $(".def").html("<p>" +"You attacked " + defenderName + " for " + playerAttackPower + " damage " + 
                    " and " + defenderName + " attacked you back for " + defenderAttackPower + "</p>")
             .css({"font-size": "40px", "font-wieght":"bold", "text-align":"left", "color":"yellow"});

    //Double the player attack Power
    playerAttackPower = playerAttackPower * 2;
    //Update the player's attack Power on the screen after each attack
    $(".player").attr("attackPower", playerAttackPower);

    }
    /*If the healthPoints of the player or the defender equal or less than zero then disable the character 
    and display the prospective message*/

    //If the selected player has been defeated then display Game Over and disable the attack button
    if(playerHealthAfterAttack <= 0) {
        attackSound.pause();
        $(".def").html("<p>" + "You have been defeated ... Game Over!!!" + 
                        " Restart to Play Again!!" + "</p>")
        .css({"font-size": "50px", "color": "yellow"});
        $('.player').remove();
        this.disabled = true;
    }
    //If the defeater has been defeated then check which fighter is this defeater
    if(defenderHealthAfterAttack <= 0) {
        /*If fighter 01 is defeated then change the selection indicators for the other enemies back to 
        zero so one of them can be selected as an enemy*/
        if($(".defender.char1").attr("healthPoints") <= 0) {
            attackSound.pause();
            fig02SeleIndicator--;
            fig03SeleIndicator--;
            fig04SeleIndicator--;
            //and remove the the defender
            $(".defender").remove();
            $(".def").html("<p>" + "You have defeated " + defenderName + 
                                " choose to fight another enemy." + '</p>')
                          .css({"font-size": "50px", "color":"yellow"});   
            //Increment the number of enemies defeated by 1
            numOfEnemiesDefeated++;
        }
        /*If fighter 02 is defeated then change the selection indicators for the other enemies back to 
        zero so one of them can be selected as an enemy*/
        if($(".defender.char2").attr("healthPoints") <= 0) {
            attackSound.pause();
            fig01SeleIndicator--;
            fig03SeleIndicator--;
            fig04SeleIndicator--;
            $(".defender").remove();
            $(".def").html("<p>" + "You have defeated " + defenderName +
                                " choose to fight another enemy." + "</p>")
                          .css({"font-size": "50px", "color":"yellow"});
            //Increment the number of enemies defeated by 1
            numOfEnemiesDefeated++;
        }
        /*If fighter 03 is defeated then change the selection indicators for the other enemies back to 
        zero so one of them can be selected as an enemy*/
        if($(".defender.char3").attr("healthPoints") <= 0) {
            attackSound.pause();
            fig01SeleIndicator--;
            fig02SeleIndicator--;
            fig04SeleIndicator--;
            $(".defender").remove();
            $(".def").html("<p>" + "You have defeated " + defenderName +
                                " choose to fight another enemy." + "</p>")
                          .css({"font-size": "50px", "color":"yellow"});   
            //Increment the number of enemies defeated by 1
            numOfEnemiesDefeated++;
        }
        /*If fighter 04 is defeated then change the selection indicators for the other enemies back to 
        zero so one of them can be selected as an enemy*/
        if($(".defender.char4").attr("healthPoints") <= 0) {
            attackSound.pause();
            fig01SeleIndicator--;
            fig02SeleIndicator--;
            fig03SeleIndicator--;
            $(".defender").remove();
            $(".def").html("<p>" + "You have defeated " + defenderName +
                                " choose to fight another enemy." + "</p>")
                          .css({"font-size": "50px", "color":"yellow"});  
            //Increment the number of enemies defeated by 1
            numOfEnemiesDefeated++;
        }
        //Stop the attack button when all enemies are defeated
        if(numOfEnemiesDefeated === 3) {
            attackSound.pause();
            $(".def").html("<p>" + "You have Won!!!" + "</p>")
                          .css({"font-size": "50px", "color":"yellow"});
            this.disabled = true;
                
        }
    }
});

});