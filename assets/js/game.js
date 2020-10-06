var playerName = window.prompt("What is your robot's name?");
var playerMoney = 10;
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if(promptFight === "fight" || promptFight === "FIGHT"){
        enemyHealth-=playerAttack;
    
        console.log(playerName+ " attacked "+enemyName+". "+enemyName+" now has "+enemyHealth+" health remaining.");
        if(enemyHealth<=0){
            window.alert(enemyName+ " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        playerHealth-=enemyAttack; 
        console.log(enemyName+ " attacked "+playerName+". "+playerName+" now has "+playerHealth+" health remaining.");
        if(playerHealth<=0){
            window.alert(playerName+ " has died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

    else if(promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip= window.confirm("Are you sure you'd like to quit?");

        if(confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney-=2;
        }
        else{
            fight();
        }
        
    }

    else{
        window.alert("You need to pick a valid option. Try again!");
    }
    
  };

  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }