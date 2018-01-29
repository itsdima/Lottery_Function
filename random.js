/*This function takes (x) many coins the user inputs and takes (x) 1in100 chances at winning a random 
amount of coins between 50 and 100, if the user specifies a 'max' number of coins he would like to 
walk away with, it will loop until he reaches max or until he loses all coins. Otherwise will return his total
coins at the first jackpot. */
function Lottery(coins, max) {
	var reward = 0; 
	var chance = Math.floor(Math.random()*((100-1)+1)+ 1); 
	var win = Math.floor(Math.random()*((100-50)+1)+50); 

	for (var i = coins; i > 0; i--){
		if (chance === 1){
			reward += win; 
			coins += reward; 
			console.log('You have won:', win, 'Coins');
			if(max === undefined){
			  return coins; 
			}
			if(coins >= max){
			  return coins; 
			}
			else{
			continue; 
			}
		}
	}
	console.log('You are out of Coins'); 
	return i; 
}

Lottery(20, 200);