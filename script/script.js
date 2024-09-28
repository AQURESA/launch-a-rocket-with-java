var SayMyName = function (name){
	alert('Your name is '+name);
}


var car = {
	   	      make: 'VW',
	   	      Color: 'PINK',
	   	      Type: 'POLO',
	   	      NumberOfWheels: 4,
	   	      IsItTurnedOn: false,
	   	      seats: [
		   	      	'seat 1',
		   	      	'seat 2',
		   	      	'seat 3',
		   	      	'seat 4'],
	   	      TurnOn: function (){
	   	      	this.IsItTurnedOn = true;

                },
                fly: function (){
                	alert('fly');
                },
                SwitchCar: function(IsOn){
                	console.log('turn car '+ IsOn )
        			if (IsOn == true){ this.IsItTurnedOn = true;}
                	else { this.IsItTurnedOn = false}


                }
            };
console.log('Secret salaam to YOU!');