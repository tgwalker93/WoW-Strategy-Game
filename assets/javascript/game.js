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
var warriorHealth = 130; 
var mageHealth = 100;
var hunterHealth = 120;
var rogueHealth = 110;

//obj attack power
var mageAttackPower = 0;
var hunterAttackPower = 0;
var rogueAttackPower = 0;
var warriorAttackPower = 0; 

//obj main attack
var mageMainAttack = 1;
var hunterMainAttack = 1;
var rogueMainAttack = 1;
var warriorMainAttack = 1; 

// END OBJECT VARIABLES

	// Get the modal
	var modal = document.getElementById('modal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function () {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}


$('#classRow').append($('<img>',{id:'roge',src:'assets/images/warrior.jpg'}))



//OBJECTS FOR CLASS SPELLS --------------------------------------

//ROGUE SPELLS
var rogueClass = {
	health: rogueHealth,
	mainAttack: rogueMainAttack,
	attackPower: rogueAttackPower,
	attack1SpellName: "Backstab",
	attack2SpellName: "Poison Blade",
	attack3SpellName: "Combo Strike",

	//Spell Info
	attack1SpellInfo: "Backstab: 25% chance to attack the enemy for 130. ",
	attack2SpellInfo: "Poison Blade: Increase your attack power by 10. ",
	attack3SpellInfo: "Combo Strike: Increase your attack power by 5 and attack the enemy for 15. ",


	attack1: function(enemyChar) {

		var spellName = "Backstab";
		var successHit = Math.floor(Math.random() * 4) + 1
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);


		if(successHit===1){

			enemyCharObj.health -= 130


			$("#gameText").text("You successfully backedstabbed your enemy for 130 health! (25% chance)");
			$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


			return;
		}else {
			$("#gameText").text("Your backstabbed attacked missed! (25% chance)");
			return;
		}


	},
	attack2: function(enemyChar) {
		var spellName = "Poison Blade";

		rogueClass.attackPower += 10;

		$("#gameText").text("You increased your attack power by 10!");



	},
	attack3: function(enemyChar) {
		var spellName = "Combo Strike"


		$("#gameText").text("You increased your attack power by 5 and attack the enemy for 15!");
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);

		//attack!
		rogueClass.attackPower += 5;
		enemyCharObj.health -= 15;

		//UPDATE HP
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#rogueHP").html("Rogue: " + rogueClass.health);
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

	//Spell Info
	attack1SpellInfo: "Frostbolt: You attack your enemy for 20 and increase your attack power by 5",
	attack2SpellInfo: "Fire Nova: Blast all enemies for 20 damage but you lose 5 health.",
	attack3SpellInfo: "Arcane Brilliance: Increase your attack power by 10 and health by 10.",

	attack1: function(enemyChar) {
	var spellName = "Frostbolt";
	$("#gameText").text("You attack your enemy for 20 and increase your attack power by 5");
	var enemyCharObj = eval(enemyChar + "Class");
	var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
	enemyCharObj.health -= 20;
	mageClass.attackPower += 5;

	$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
	},
	attack2: function(enemyChar) {
	var spellName = "Fire Nova";
		hunterClass.health -= 20;
		warriorClass.health -= 20;
		rogueClass.health -= 20;
		mageClass.health -= 5;


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
		$("#gameText").html("You cleaved 20 damage to all enemies, but you lost 5 health!");

		}


	},
	attack3: function(enemyChar) {
		var spellName = "Arcane Brilliance";

		if(gameActive===true){
		$("#gameText").html("You increased your attack power by 10 and your health by 10!");

		}

		mageClass.attackPower += 10;
		mageClass.health += 10;

		$("#mageHP").html("Mage: " + mageClass.health);
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



	//Spell Info
	attack1SpellInfo: "Cleave: Deal 10 damage to all enemies. ",
	attack2SpellInfo: "Enrage: Attack your enemy for 30 but you lose 10 health. ",
	attack3SpellInfo: "Shield Slam: You attack your enemy for 10 and you gain 5 attack power. ",



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
		warriorClass.health -=10;


		//Update HP
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#warriorHP").html("Warrior: " + warriorClass.health);
		


	},
	attack3: function(enemyChar) {
		var spellName = "Shield Slam";
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);

		if(gameActive===true){
		$("#gameText").html("You attack your enemy for 10 and you gained 5 attack power!");

		}	
		enemyCharObj.health -= 10;
		warriorClass.attackPower += 5;



		//Update HP
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#warriorHP").html("Warrior: " + warriorClass.health);

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




	//Spell Info
	attack1SpellInfo: "Tranquility Shot: Attack the enemy for 20 and heal for 10.",
	attack2SpellInfo: "Beast Enrage: Increase your attack power by 5, and attack the player for 20. ",
	attack3SpellInfo: "Arcane Shot: You have a 50% chance of landing an attack for 75. ",



	attack1: function(enemyChar) {
		var spellName = "Tranquility Shot";
		$("#gameText").text("Attacked the enemy for 20 and healed for 10!");

		var enemyCharObj = eval(enemyChar + "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
		enemyCharObj.health -= 20;
		hunterClass.health += 10;
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
		$("#hunterHP").html("Hunter: " + hunterClass.health);



	},
	attack2: function(enemyChar) {
		var spellName = "Beast Enrage";
		$("#gameText").text("You increased your attack power by 5, and attacked the player for 20!");
		var enemyCharObj = eval(enemyChar + "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);
		enemyCharObj.health -= 20;
		hunterClass.attackPower += 5;
		$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);
	},
	
	attack3: function(enemyChar) {

		var spellName = "Arcane Shot";
		var successHit = Math.floor(Math.random() * 2) + 1
		var enemyCharObj = eval(enemyChar+ "Class");
		var capitalizeEnemy = enemyChar.substr(0,1).toUpperCase()+enemyChar.substr(1);


		if(successHit===1){

			enemyCharObj.health -= 75;


			$("#gameText").text("You successfully landed Arcane Shot on your enemy for 75 health! (50% chance)");
			$("#" + enemyChar + "HP").html(capitalizeEnemy + ": " + enemyCharObj.health);


			return;
		}else {

			$("#gameText").text("Your Arcane Shot spell missed! (50% chance)");
			return;
		}


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



	var spellInfo1 = charChosenObj.attack1SpellInfo
	var spellInfo2 = charChosenObj.attack2SpellInfo
	var spellInfo3 = charChosenObj.attack3SpellInfo

	$("#spellInfo1").html(spellInfo1);
	$("#spellInfo2").html(spellInfo2);
	$("#spellInfo3").html(spellInfo3);




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
		$("#charA").html("Your Attack: " + charClass.mainAttack );
	}else{

		$("#charHP").html("Your Character Health:  ");
		$("#charAP").html("Your Character Attack Power: ");
		$("#charA").html("Your Attack: ");

	}



} else {

	$("#charHP").html("Your Character Health:  ");
	$("#charAP").html("Your Character Attack Power: ");
	$("#charA").html("Your Attack: " );

}




if (typeof enemyChosen !== "undefined" ){
	var enemyClass = eval(enemyChosen + "Class");
	if(enemyClass.health >= 0 && enemyClass.attackPower >= 0){
		$("#enemyHP").html("Enemy Health:  " + enemyClass.health );
		$("#enemyAP").html("Enemy Attack Power: " + enemyClass.attackPower );
		$("#enemyA").html("Enemy Attack: " + enemyClass.mainAttack );

	}else{

		$("#enemyHP").html("Enemy Health:  ");
		$("#enemyAP").html("Enemy Attack Power: ");
		$("#enemyA").html("Enemy Attack: ");

	}



} else {

	$("#enemyHP").html("Enemy Health:  ");
	$("#enemyAP").html("Enemy Attack Power: ");
	$("#enemyA").html("Enemy Attack: ");

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
	enemyClass.attackPower = 5;
	enemyClass.mainAttack+=5;





	//ATTACK LOGIC!!
	if(spell==="attack") {

		enemyClass.health -= charClass.mainAttack;
		charClass.health -= enemyClass.mainAttack;

		if(gameActive===true){

			$("#gameText").html("<div> You attaked the enemy for: " + charClass.mainAttack + " damage points! </div>" 
				+"<br>"
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
		$("#gameText").append("<div> The enemy attacked you for: " + enemyClass.mainAttack + " damage points! </div>");


	}else if(spell==="attack2"){
		var capitalizeChar = charChosen.substr(0,1).toUpperCase()+charChosen.substr(1);
		charClass.health -= enemyClass.mainAttack;
		$(charHP).html(capitalizeChar + ": " + charClass.health);

		charClass.attack2(enemyChosen);
		$("#gameText").append("<div> The enemy attacked you for: " + enemyClass.mainAttack + " damage points! </div>");

	}else if(spell==="attack3"){
		var capitalizeChar = charChosen.substr(0,1).toUpperCase()+charChosen.substr(1);
		charClass.health -= enemyClass.mainAttack;
		$(charHP).html(capitalizeChar + ": " + charClass.health);

		charClass.attack3(enemyChosen);
		$("#gameText").append("<div> The enemy attacked you for: " + enemyClass.mainAttack + " damage points! </div>");

	}


	spell = "attack";

	updateStats();


	//if you loose the game! 
	if(charClass.health<=0) {
		attackReady=false;
		// show game over
		gameActive = false;
		$("#gameText").text("You loose! Press enter to play again!");
		if(enemyClass.health<=0){
			var defeatedEnemy = enemyChosen;
			var capitalizeChar = defeatedEnemy.substr(0,1).toUpperCase()+defeatedEnemy.substr(1);
			$("#" + defeatedEnemy + "HP").html(capitalizeChar + ": Dead");
		};
		return;
	}



	//If enemy is defeated!
	if(enemyClass.health<=0){
		enemiesRemaining -= 1;
		attackReady=false;
		var defeatedEnemy = enemyChosen;
		var capitalizeChar = defeatedEnemy.substr(0,1).toUpperCase()+defeatedEnemy.substr(1);
		$("div").off("click");
		$("#gameText").text("You defeated the " + defeatedEnemy + " class. Please choose another enemy to fight!");
		$("#" + defeatedEnemy + "HP").html(capitalizeChar + ": Dead");
		chooseEnemy();
		if(enemiesRemaining===0) {
			attackReady=false;
			// show game over
			gameActive = false;
			$("#gameText").text("You win! Press enter to play again!");

			}

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
		warriorHealth = 130; 
		mageHealth = 100;
		hunterHealth = 120;
		rogueHealth = 110;

		//obj attack power
		mageAttackPower = 0;
		hunterAttackPower = 0;
		rogueAttackPower = 0;
		warriorAttackPower = 0; 

		//obj main attack
		mageMainAttack = 1;
		hunterMainAttack = 1;
		rogueMainAttack = 1;
		warriorMainAttack = 1; 

		// END OBJECT VARIABLES



		warriorClass.health = 130;
		mageClass.health = 100;
		hunterClass.health = 120;
		rogueClass.health = 110;



		warriorClass.attackPower = 0;
		mageClass.attackPower = 0;
		hunterClass.attackPower = 0;
		rogueClass.attackPower = 0;


		warriorClass.mainAttack = 1;
		mageClass.mainAttack = 1;
		hunterClass.mainAttack = 1;
		rogueClass.mainAttack = 1;



		//Spell info panel 
		$("#spellInfo1").html("");
		$("#spellInfo2").html("");
		$("#spellInfo3").html("");





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

//HealthBar Logic
var hitBtn = $('button.damage'),
reset = $('button.reset'),
hBar = $('.health-bar'),
bar = hBar.find('.bar'),
hit = hBar.find('.hit');

hitBtn.on("click", function(){
var total = hBar.data('total'),
  value = hBar.data('value');

if (value < 0) {
	  log("you dead, reset");
return;
}
// max damage is essentially quarter of max life
var damage = Math.floor(Math.random()*total);
// damage = 100;
var newValue = value - damage;
// calculate the percentage of the total width
var barWidth = (newValue / total) * 100;
var hitWidth = (damage / value) * 100 + "%";

// show hit bar and set the width
hit.css('width', hitWidth);
hBar.data('value', newValue);

setTimeout(function(){
hit.css({'width': '0'});
bar.css('width', barWidth + "%");
}, 500);
//bar.css('width', total - value);

log(value, damage, hitWidth);

if( value < 0){
log("DEAD");
}
});

reset.on('click', function(e){
hBar.data('value', hBar.data('total'));

hit.css({'width': '0'});

  bar.css('width', '100%');
  log("resetting health to 1000");
});

