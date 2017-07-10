$(document).ready(function() {




var charList = ["warrior", "mage", "hunter", "rogue"];


var charChosen;
var enemyChosen;

var enemiesRemaining = 3;
var gameActive = true;
var attackReady = false;
var spell = "attack";


//OBJECT VARRIABLES

//obj health
var warriorHealth = 140; 
var mageHealth = 80;
var hunterHealth = 120;
var rogueHealth = 100;

//obj attack power
var mageAttackPower = 2;
var hunterAttackPower = 2;
var rogueAttackPower = 2;
var warriorAttackPower = 2; 

//obj main attack
var mageMainAttack = 1;
var hunterMainAttack = 1;
var rogueMainAttack = 1;
var warriorMainAttack = 1; 

// END OBJECT VARIABLES


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
	mainAttack: rogueMainAttack,
	attackPower: rogueAttackPower,
	attack1SpellName: "Backstab",
	attack2SpellName: "Poison Blade",
	attack3SpellName: "Combo Strike",

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
	attack2: function(enemyChar) {
		var spellName = "Poison Blade";

		this.attackPower += 30;

		$("#gameText").text("You increased your attack power by 30!");



	},
	attack3: function(enemyChar) {
		var spellName = "Combo Strike"


		$("#gameText").text("You increased your attack power by 15 and attack the enemy for 5!");
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);

		//attack!
		this.attackPower += 15;
		enemyCharObj.health -= 5;

		//UPDATE HP
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#rogueHP").html("Rogue: " + this.health);
	},

};


//MAGE SPELLS
var mageClass = {
	health: mageHealth,
	mainAttack: mageMainAttack,
	attackPower: mageAttackPower,
	attack1SpellName: "Frost Bolt",
	attack2SpellName: "Fire Nova",
	attack3SpellName: "Arcane Brilliance",


	attack1: function(enemyChar) {
	var spellName = "Frostbolt";
	$("#gameText").text("You reduced the enemy's health by 20 and reduced his attack power by 10!");
	var enemyCharObj = eval(enemyChar + "Class");
	var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
	enemyCharObj.health -= 20;
	enemyCharObj.attackPower -=10;

	$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
	},
	attack2: function(enemyChar) {
	var spellName = "Fire Nova";
		hunterClass.health -= 15;
		warriorClass.health -= 15;
		rogueClass.health -= 15;
		this.health -= 5;


		var hunterHP = "#hunterHP";
		var warriorHP = "#warriorHP";
		var rogueHP = "#rogueHP";
		var mageHP = "#mageHP";


		//Health bars!!! 
		$(hunterHP).html("Hunter: " + hunterClass.health);
		$(mageHP).html("Mage: " + mageClass.health);
		$(rogueHP).html("Rogue: " + rogueClass.health);
		$(warriorHP).html("Warrior: " + warriorClass.health);




		if(gameActive===true){
		$("#gameText").html("You cleaved 15 damage to all enemies, but you lost 5 health!");

		}


	},
	attack3: function(enemyChar) {
		var spellName = "Arcane Brilliance";

		if(gameActive===true){
		$("#gameText").html("You increased your attack power by 10 and your health by 10");

		}

		this.attackPower += 10;
		this.health += 10;

		$("#mageHP").html("Mage: " + this.health);
	},

};


//WARRIOR SPELLS 
var warriorClass = {
	health: warriorHealth,
	mainAttack: warriorMainAttack,
	attackPower: warriorAttackPower,
	attack1SpellName: "Cleave",
	attack2SpellName: "Enrage",
	attack3SpellName: "Shield Slam",



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
	attack2: function(enemyChar) {
		var spellName = "Enrage";
		var randomSpell = Math.floor(Math.random() * 3) + 1
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);

		if(gameActive===true){
		$("#gameText").html("You attack your enemy for 30 but you lose 10 health!");

		}
		enemyCharObj.health -= 30;
		this.health -=10;


		//Update HP
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#warriorHP").html("Warrior: " + this.health);
		


	},
	attack3: function(enemyChar) {
		var spellName = "Shield Slam";
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);

		if(gameActive===true){
		$("#gameText").html("You attack your enemy for 10 and you gained 20 attack power!");

		}	
		enemyCharObj.health -= 10;
		this.attackPower += 20;



		//Update HP
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#warriorHP").html("Warrior: " + this.health);

	},


};


//HUNTER SPELLS 
var hunterClass = {
	health: hunterHealth,
	mainAttack: hunterMainAttack,
	attackPower: hunterAttackPower,
	attack1SpellName: "Tranquility Shot",
	attack2SpellName: "Beast Enrage",
	attack3SpellName: "Arcane Shot",

	attack1: function(enemyChar) {
		var spellName = "tranquilityShot";
		$("#gameText").text("Attacked the enemy for 20 and healed for 10!");

		var enemyCharObj = eval(enemyChar + "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
		enemyCharObj.health -= 10;
		this.health += 10;
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


	},
	attack2: function(enemyChar) {
		var spellName = "Beast Enrage";
		$("#gameText").text("You increased your attack power by 10, and attacked the player for 20!");
		var enemyCharObj = eval(enemyChar + "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
		enemyCharObj.health -= 20;
		this.attackPower += 10;
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
	},
	
	attack3: function(enemyChar) {
		var spellName = "Arcane Shot";
		var enemyCharObj = eval(enemyChar + "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);




		enemyCharObj.health -= 25;
		$("#gameText").text("You attack the enemy for 25!");

		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


	},

};






function displaySpells(charChosen) {
	var charChosenObj = eval(charChosen + "Class");
	var attack1 = charChosenObj.attack1SpellName
	var attack2 = charChosenObj.attack2SpellName
	var attack3 = charChosenObj.attack3SpellName


	$("#attack1").html(attack1);
	$("#attack2").html(attack2);
	$("#attack3").html(attack3);




}





function chooseCharacter() {


// CLICKING ON Warrior

$( "#warrior" ).on("click", function() {

	$("#gameText").text("You chose Warrior! Now choose your enemy to attack! ");
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[0];
	updateStats();
	displaySpells(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	updateStats();
	return;


});

// CLICKING ON MAGE
$( "#mage" ).on("click", function() {

	$("#gameText").text("You chose Mage! Now choose your enemy to attack!");
	jQuery("#warrior").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[1];
	updateStats();
	displaySpells(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	//updateStats();
	return;



});
// CLICKING ON HUNTER
$( "#hunter" ).on("click", function() {

	$("#gameText").text("You chose Hunter! Now choose your enemy to attack!");
	jQuery("#warrior").detach().appendTo('#enemiesArea');
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	charChosen = charList[2];
	updateStats();
	displaySpells(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	//updateStats();
	return;


});
// CLICKING ON ROGUE
$( "#rogue" ).on("click", function() {

	$("#gameText").text("You chose Rogue! Now choose your enemy to attack!");

	jQuery("#warrior").detach().appendTo('#enemiesArea');
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[3];
	updateStats();
	displaySpells(charChosen);
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	chooseEnemy();
	return;

});

}




//FUNCTION FOR CHOOSING ENEMY ------------------
function chooseEnemy() {

$( "#" + charList[0] ).on("click", function() {
	jQuery("#" + charList[0]).detach().appendTo('#defenderArea');
	enemyChosen = charList[0];
	updateStats();
	$("#gameText").text("You chose an enemy out of the three. Now click a spell to attack!");
	var index = charList.indexOf(enemyChosen);
	charList.splice(index, 1);
	attackReady = true;
	$("div").off("click");
	return;

});

$( "#" + charList[1] ).on("click", function() {
	jQuery( "#" + charList[1]).detach().appendTo('#defenderArea');
	enemyChosen = charList[1];
	updateStats();
	$("#gameText").text("You chose an enemy out of the three. Now click a spell to attack!");
	var index = charList.indexOf(enemyChosen);
	charList.splice(index, 1);
	attackReady = true;
	$("div").off("click");
	return;



});

$( "#" + charList[2] ).on("click", function() {
	jQuery( "#" + charList[2]).detach().appendTo('#defenderArea');
	enemyChosen = charList[2];
	updateStats();
	$("#gameText").text("You chose an enemy out of the three. Now click a spell to attack!");
	var index = charList.indexOf(enemyChosen);
	charList.splice(index, 1);
	attackReady = true;
	$("div").off("click");
	return;

});



}






function updateStats() {

//UPDATE STATS!!! 

if (typeof charChosen !== "undefined") {
	var charClass = eval(charChosen + "Class");


	if(charClass.health >= 0 && charClass.attackPower >= 0){
		$("#charHP").html("Your Character health:  " + charClass.health );
		$("#charAP").html("Your Character attack power: " + charClass.attackPower );
	}else{

		$("#charHP").html("Your Character Health:  ");
		$("#charAP").html("Your Character Attack Power: ");

	}



} else {

	$("#charHP").html("Your Character Health:  ");
	$("#charAP").html("Your Character Attack Power: ");

}




if (typeof enemyChosen !== "undefined" ){
	var enemyClass = eval(enemyChosen + "Class");
	if(enemyClass.health >= 0 && enemyClass.attackPower >= 0){
		$("#enemyHP").html("Enemy Health:  " + enemyClass.health );
		$("#enemyAP").html("Enemy Attack Power: " + enemyClass.attackPower );

	}else{

		$("#enemyHP").html("Enemy Health:  ");
		$("#enemyAP").html("Enemy Attack Power: ");

	}



} else {

	$("#enemyHP").html("Enemy Health:  ");
	$("#enemyAP").html("Enemy Attack Power: ");

}






};


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
			 + "<div> The enemy attacked you for: " + enemyClass.mainAttack + " damage points! </div>");

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
		var capitalizeChar = charChosen.substr(0,1).toUpperCase()+charChosen.substr(1);
		charClass.health -= enemyClass.mainAttack;
		$(charHP).html(capitalizeChar + ": " + charClass.health);

		charClass.attack2(enemyChosen);
		$("#gameText").append("<div> The enemy attacked you for: " + enemyClass.mainAttack + "damage points! </div>");

	}else if(spell==="attack3"){
		var capitalizeChar = charChosen.substr(0,1).toUpperCase()+charChosen.substr(1);
		charClass.health -= enemyClass.mainAttack;
		$(charHP).html(capitalizeChar + ": " + charClass.health);

		charClass.attack3(enemyChosen);
		$("#gameText").append("<div> The enemy attacked you for: " + enemyClass.mainAttack + "damage points! </div>");

	}


	spell = "attack";

	updateStats();


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
		attackReady=false;
		var defeatedEnemy = enemyChosen;
		var capitalizeChar = defeatedEnemy.substr(0,1).toUpperCase()+defeatedEnemy.substr(1);
		$("div").off("click");
		$("#gameText").text("You defeated the " + defeatedEnemy + " class. Please choose another enemy to fight!");
		//$("#" + defeatedEnemy).css("visibility", "hidden");
		$("#" + defeatedEnemy + "HP").html(capitalizeChar + ": Dead");
		chooseEnemy();

		if(enemiesRemaining===0) {
			attackReady=false;
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
		updateStats();





										}
});






// Spell Slot one! 
$("#attack1").on("click", function() {

if(attackReady===true) {
	spell="attack1";
	attack();
	updateStats();


}
										
});



// Spell Slot Two!
$("#attack2").on("click", function() {

if(attackReady===true) {
	spell="attack2";
	attack();
	updateStats();


}
										
});


//Spell Slot Three!
$("#attack3").on("click", function() {

if(attackReady===true) {
	spell="attack3";
	attack();
	updateStats();


}
										
});




//---------------------GAME RESET ----------------------------------------------
//DEFINE ON KEY UP OUTSIDE OF A FUNCTION; KEEP GLOBAL EVENT LISTENER RUNNING THROUGH OUT GAME
document.onkeyup = function(event) {
	if (!gameActive && event.which === 13) {
		gameActive = true;



		// Reset variables here
		charList = ["warrior", "mage", "hunter", "rogue"];


		charChosen = undefined;
		enemyChosen = undefined;
		enemiesRemaining = 3;
		gameActive = true;
		attackReady = false;
		spell = "attack";


		//OBJECT VARRIABLES

		//obj health
		warriorHealth = 140; 
		mageHealth = 80;
		hunterHealth = 120;
		rogueHealth = 100;

		//obj attack power
		mageAttackPower = 2;
		hunterAttackPower = 2;
		rogueAttackPower = 2;
		warriorAttackPower = 2; 

		//obj main attack
		mageMainAttack = 1;
		hunterMainAttack = 1;
		rogueMainAttack = 1;
		warriorMainAttack = 1; 

		// END OBJECT VARIABLES



		warriorClass.health = 140;
		mageClass.health = 80;
		hunterClass.health = 120;
		rogueClass.health = 100;



		warriorClass.attackPower = 2;
		mageClass.attackPower = 2;
		hunterClass.attackPower = 2;
		rogueClass.attackPower = 2;


		warriorClass.mainAttack = 1;
		mageClass.mainAttack = 1;
		hunterClass.mainAttack = 1;
		rogueClass.mainAttack = 1;




		//Placing all characters back in the your character panel
		jQuery("#mage").detach().appendTo('#characterArea');
		jQuery("#rogue").detach().appendTo('#characterArea');
		jQuery("#hunter").detach().appendTo('#characterArea');
		jQuery("#warrior").detach().appendTo('#characterArea');





		$("#warriorHP").html("Warrior: " + warriorClass.health);
		$("#mageHP").html("Mage: " + mageClass.health);
		$("#rogueHP").html("Rogue: " + rogueClass.health);
		$("#hunterHP").html("Hunter: " + hunterClass.health);

		//Change text on buttons
		$("#attack1").html("Spell Slot 1");
		$("#attack2").html("Spell Slot 2");
		$("#attack3").html("Spell Slot 3");


		//Choosing enemy function is called inside chooseCharacter
		chooseCharacter();
		$("#gameText").html("Select your character to begin!");
	}
}



//Choosing enemy function is called inside chooseCharacter
chooseCharacter();

});

