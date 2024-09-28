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

                },
                fly: function (){
                	alert('fly');
                },
                SwitchCar = function (TurnOn){
                	console.log('turn car '+ TurnOn);

                if (TurnOn == true){this.IsItTurnedOn == true}
                		else {this.IsItTurnedOn == false}
                };

                
            console.log('Secret salaam to YOU!');