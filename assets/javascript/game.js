$(document).ready(function() {




var charList = ["warrior", "mage", "hunter", "rogue"];


var charChosen;
var charEnemy;
var warriorHealth = 140;
var mageHealth = 80;
var hunterHealth = 120;
var rogueHealth = 100; 



$( "#attack" ).on("click", function() {
	$("#gameText").text("Start the game!");




});



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
	isIgnore = true;
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
	isIgnore = true;
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
	isIgnore = true;
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
	isIgnore = true;
	chooseEnemy();
	return;

});


}




//FUNCTION FOR CHOOSING ENEMY ------------------
function chooseEnemy() {

$("div").trigger('click');


$( "#" + charList[0] ).on("click", function() {
	jQuery("#" + charList[0]).detach().appendTo('#defenderArea');
	charChosen = charList[0];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	return;

});

$( "#" + charList[1] ).on("click", function() {
	jQuery( "#" + charList[1]).detach().appendTo('#defenderArea');
	charChosen = charList[1];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	return;



});

$( "#" + charList[2] ).on("click", function() {
	jQuery( "#" + charList[2]).detach().appendTo('#defenderArea');
	charChosen = charList[2];
	var index = charList.indexOf(charChosen);
	charList.splice(index, 1);
	$("div").off("click");
	return;

});





}


//Choosing enemy function is called inside chooseCharacter
chooseCharacter();





});
