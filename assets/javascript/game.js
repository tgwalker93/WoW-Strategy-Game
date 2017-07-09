$(document).ready(function() {




var charList = ["warrior", "mage", "hunter", "rogue"];


var charChosen;
var enemyChosen;
var warriorHealth = 140;
var mageHealth = 80;
var hunterHealth = 120;
var rogueHealth = 100; 
var enemiesRemaining = 3;
var gameActive = true;
var attackReady = false;
var spell = "attack";

$('#classRow').append($('<img>',{id:'roge',src:'assets/images/warrior.jpg'}))

//Create a class for all the character choices! 
// class charClass {
// 	constructor(health) {
// 	this.health = health;
// 	//this.attackPower = attackPower;
// 	}
// }


// //Create objects for each possible character selection
// var rogueClass = new charClass(rogueHealth);
// var warriorClass = new charClass(warriorHealth);
// var mageClass = new charClass(mageHealth);
// var hunterClass = new charClass(hunterHealth);

//OBJECTS FOR CLASS SPELLS --------------------------------------

//ROGUE SPELLS
var rogueClass = {
	health: rogueHealth,
	mainAttack: 1,
	attackPower: 2,

	attack1: function(enemyChar) {

		var spellName = "Backstab";
		var successHit = Math.floor(Math.random() * 2) + 1
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);


		if(successHit===1){

			enemyCharObj.health -= 50
			//$("#rogue").html("Rogue: " + rogueClass.health);
			//$("#" + enemyChar + "HP").html(enemyChar + ": " + enemyCharObj.health);

			$("#gameText").text("You successfully backedstabbed your enemy for 50 health! (50% chance)");
			$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


			return;
		}else {
			$("#gameText").text("Your backstabbed attacked missed! (50% chance)");
			return;
		}


	},

};


//MAGE SPELLS
var mageClass = {
	health: mageHealth,
	mainAttack: 1,
	attackPower: 2,

	attack1: function(enemyChar) {
	var spellName = "Frostbolt";
	$("#gameText").text("You reduced the enemy's health by 20 and reduced his attack power by 10!");
	var enemyCharObj = eval(enemyChar+ "Class");
	var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
	enemyCharObj.health -= 20;
	enemyCharObj.attackPower -=10;

	$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


	},

};


//WARRIOR SPELLS 
var warriorClass = {
	health: warriorHealth,
	mainAttack: 1,
	attackPower: 2,

	attack1: function(enemyChar) {
		var spellName = "Cleave";
		hunterClass.health -= 10;
		mageClass.health -= 10;
		rogueClass.health -= 10;


		var hunterHP = "#hunterHP";
		var mageHP = "#mageHP";
		var rogueHP = "#rogueHP";



		//Health bars!!! 
		$(hunterHP).html("Hunter: " + hunterClass.health);
		$(mageHP).html("Mage: " + mageClass.health);
		$(rogueHP).html("Rogue: " + rogueClass.health);




		if(gameActive===true){
		$("#gameText").html("You cleaved 10 damage to all enemies!");

		}
	},


};


//HUNTER SPELLS 
var hunterClass = {
	health: hunterHealth,
	mainAttack: 1,
	attackPower: 2,

	attack1: function(enemyChar) {
		var spellName = "tranquilityShot";
		$("#gameText").text("Attacked the enemy for 20 and healed for 10!");

		var enemyCharObj = eval(enemyChar + "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
		enemyCharObj.health -= 10;
		this.health += 10;
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


	},

};










$("#classStuff").html("Warrior Health " + warriorClass.health + "<br>" 
	 + "Mage Health " + mageClass.health + "<br>" 
	 + "rogue Health " + rogueClass.health + "<br>" 
	 + "hunter Health " + hunterClass.health + "<br>" +
	"Warrior Attack Power: " + warriorClass.attackPower
	+ "<br>" + "Warrior Damage: " + warriorClass.mainAttack
	+ "<br> Start of program");




function chooseCharacter() {
$("#classStuff").html("Warrior Health: " + warriorClass.health + "<br>" 
	 + "Mage Health: " + mageClass.health + "<br>" 
	 + "rogue Health: " + rogueClass.health + "<br>" 
	 + "hunter Health: " + hunterClass.health + "<br>" +
	"Warrior Attack Power: " + warriorClass.attackPower
	+ "<br>" + "Warrior Damage: " + warriorClass.mainAttack
	+ "<br> inside chooseCharacter function");


// CLICKING ON Warrior

$( "#warrior" ).on("click", function() {

	$("#gameText").text("You chose Warrior! ");
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[0];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	return;


});

// CLICKING ON MAGE
$( "#mage" ).on("click", function() {

	$("#gameText").text("You chose Mage! ");
	jQuery("#warrior").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[1];
	console.log(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	return;



});
// CLICKING ON HUNTER
$( "#hunter" ).on("click", function() {

	$("#gameText").text("You chose Hunter! ");
	jQuery("#warrior").detach().appendTo('#enemiesArea');
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	charChosen = charList[2];
	console.log(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	return;


});
// CLICKING ON ROGUE
$( "#rogue" ).on("click", function() {

	$("#gameText").text("You chose Rogue! ");

	jQuery("#warrior").detach().appendTo('#enemiesArea');
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[3];
	console.log(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	return;

});


}




//FUNCTION FOR CHOOSING ENEMY ------------------
function chooseEnemy() {
$("#classStuff").html("Warrior Health " + warriorClass.health + "<br>" 
	 + "Mage Health " + mageClass.health + "<br>" 
	 + "rogue Health " + rogueClass.health + "<br>" 
	 + "hunter Health " + hunterClass.health + "<br>" +
	"Warrior Attack Power: " + warriorClass.attackPower
	+ "<br>" + "Warrior Damage: " + warriorClass.mainAttack
	+ "<br> inside chooseEnemy function");

$( "#" + charList[0] ).on("click", function() {
	jQuery("#" + charList[0]).detach().appendTo('#defenderArea');
	enemyChosen = charList[0];
	var index = charList.indexOf(enemyChosen);
	charList.splice(index, 1);
	attackReady = true;
	return;

});

$( "#" + charList[1] ).on("click", function() {
	jQuery( "#" + charList[1]).detach().appendTo('#defenderArea');
	enemyChosen = charList[1];
	var index = charList.indexOf(enemyChosen);
	charList.splice(index, 1);
	attackReady = true;
	return;



});

$( "#" + charList[2] ).on("click", function() {
	jQuery( "#" + charList[2]).detach().appendTo('#defenderArea');
	enemyChosen = charList[2];
	var index = charList.indexOf(enemyChosen);
	charList.splice(index, 1);
	attackReady = true;
	return;

});



}












$("#classStuff").html("Warrior Health " + warriorClass.health + "<br>" 
	 + "Mage Health " + mageClass.health + "<br>" 
	 + "rogue Health " + rogueClass.health + "<br>" 
	 + "hunter Health " + hunterClass.health + "<br>" +
	"Warrior Attack Power: " + warriorClass.attackPower
	+ "<br>" + "Warrior Damage: " + warriorClass.mainAttack
	+ "<br> inside chooseEnemy function");




function attack() {



	//your Character, increasing attack power
	var charHP = "#" + charChosen + "HP";
	var charClass = eval(charChosen + "Class");
	charClass.mainAttack+=charClass.attackPower;



	//enemy, increasing attack power
	var enemyHP = "#" + enemyChosen + "HP";
	var enemyClass = eval(enemyChosen + "Class");
	enemyClass.mainAttack+=enemyClass.attackPower;





	//ATTACK LOGIC!!
	if(spell==="attack") {

		enemyClass.health -= charClass.mainAttack;
		charClass.health -= enemyClass.mainAttack;

		if(gameActive===true){

			$("#gameText").html("<div> You attaked the enemy for: " + charClass.mainAttack + " damage points! </div>"
			 + "<div> The enemy attacked you for: " + enemyClass.mainAttack + "damage points! </div>");

		}

		var capitalizeEnemy = enemyChosen.substr(0,1).toUpperCase()+enemyChosen.substr(1);
		var capitalizeChar = charChosen.substr(0,1).toUpperCase()+charChosen.substr(1);

		//Health bars!!! 
		$(enemyHP).html(capitalizeEnemy + ": " + enemyClass.health);
		$(charHP).html(capitalizeChar + ": " + charClass.health);

	}else if(spell==="attack1"){

		var capitalizeChar = charChosen.substr(0,1).toUpperCase()+charChosen.substr(1);
		charClass.health -= enemyClass.mainAttack;
		$(charHP).html(capitalizeChar + ": " + charClass.health);

		charClass.attack1(enemyChosen);
		$("#gameText").append("<div> The enemy attacked you for: " + enemyClass.mainAttack + "damage points! </div>");


	}else if(spell==="attack2"){

	}else if(spell==="attack3"){

	}


	spell = "attack";




	//if you loose the game! 
	if(charClass.health<=0) {
		attackReady=false;
		// show game over
		gameActive = false;
		$("#gameText").text("You loose! Press enter to play again!");
	}



	//If enemy is defeated!
	if(enemyClass.health<=0){
		enemiesRemaining -= 1;
		var defeatedEnemy = enemyChosen;
		$("div").off("click");
		$("#gameText").text("You defeated the " + defeatedEnemy + " class. Please choose another enemy to fight!");
		$("#" + defeatedEnemy).remove();
		chooseEnemy();

		if(enemiesRemaining===0) {
			// show game over
			gameActive = false;
			$("#gameText").text("You win! Press enter to play again!");
			// restartGame();
			}//else{
				//$("div").off("click");
				//chooseEnemy();
				//return;

	//}
		return;
	}


							}






// ATTACK BUTTON 
$("#attack").on("click", function() {

if(attackReady===true) {


		attack();





										}
});






// Spell Slot one! 
$("#attack1").on("click", function() {

if(attackReady===true) {
	spell="attack1";
	attack();


}
										
});



//DEFINE ON KEY UP OUTSIDE OF A FUNCTION; KEEP GLOBAL EVENT LISTENER RUNNING THROUGH OUT GAME
document.onkeyup = function(event) {
	if (!gameActive && event.which === 13) {
		// Reset variables here
		gameActive = true;
		location.reload();
	}
}



//Choosing enemy function is called inside chooseCharacter
chooseCharacter();


});

