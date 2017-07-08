$(document).ready(function() {




var charList = ["warrior", "mage", "hunter", "rogue"];


var charChosen;
var charEnemy;
var warriorHealth = 140;
var mageHealth = 80;
var hunterHealth = 120;
var rogueHealth = 100; 

$('#classRow').append($('<img>',{id:'roge',src:'assets/images/warrior.jpg'}))

//Create a class for all the character choices! 
class charClass {
	constructor(health, attackPower) {
	this.health = health;
	this.attackPower = attackPower;
	}
}


//Create objects for each possible character selection
var rogueClass = new charClass(rogueHealth, 50);
var warriorClass = new charClass(warriorHealth, 50);
var mageClass = new charClass(mageHealth, 50);
var hunterClass = new charClass(hunterHealth, 50);






function chooseCharacter() {

// CLICKING ON Warrior

$( "#warrior" ).on("click", function() {

	$("#gameText").text("You chose Warrior! ");
	jQuery("#mage").detach().appendTo('#enemiesArea');
	jQuery("#rogue").detach().appendTo('#enemiesArea');
	jQuery("#hunter").detach().appendTo('#enemiesArea');
	charChosen = charList[0];
	console.log(charChosen);
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

$( "#" + charList[0] ).on("click", function() {
	jQuery("#" + charList[0]).detach().appendTo('#defenderArea');
	charChosen = charList[0];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	attack();
	return;

});

$( "#" + charList[1] ).on("click", function() {
	jQuery( "#" + charList[1]).detach().appendTo('#defenderArea');
	charChosen = charList[1];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	attack();
	return;



});

$( "#" + charList[2] ).on("click", function() {
	jQuery( "#" + charList[2]).detach().appendTo('#defenderArea');
	charChosen = charList[2];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	attack();
	return;

});

}


function attack() {

$("#attack").on("click", function() {

	var enemyHP = "#" + charChosen + "HP";
	var enemyClass = eval(charChosen + "Class");
	var enemyAttackPower = enemyClass.attackPower;
	enemyClass.health-=10;
	$("#gameText").text("You attaked the enemy for 10!");
	$(enemyHP).text(charChosen + "–" + enemyClass.health);
	if(enemyClass.health===0){
		var defeatedEnemy = charChosen;
		$("div").off("click");
		$("#gameText").text("You defeat the " + defeatedEnemy + " class. Please choose another enemy to fight!");
		$("#" + defeatedEnemy).remove();
		if( $("#defenderArea").is(':empty') ) {
			restartGame();
		}
		else{

		chooseEnemy();

		}
		return;
	}

});


}

//Choosing enemy function is called inside chooseCharacter
chooseCharacter();


function restartGame() {
	location.reload();

}


});
