	app.controller('MainController', ['$scope', function($scope) { 
	$iterator=0;
	$scope.playable=true;
	$scope.result=" ";

	$scope.board=[
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"},
		{value:0,
		src:"blank.jpg"}
	];

	$scope.change=function(i){
		if($scope.playable==true){
			if($scope.board[i].value==0){
				$scope.board[i].value=1;
				$scope.board[i].src="circle.jpg";
				$scope.ifLost(1);
				$iterator++;
				if($iterator==5&&$scope.playable==true){
					tie();
				}else if($scope.playable==true){
					AI_move();
					$scope.ifLost(2);
					}
			}	
		}
	}
		
	function AI_move(){
		var rand_place;
		do{
			rand_place =  Math.floor((Math.random() * 8)); 
		}while($scope.board[rand_place].value!=0);
		$scope.board[rand_place].value=2;
		$scope.board[rand_place].src="cross.jpg";
	}
		
	$scope.ifLost=function(chars){
		if(($scope.board[0].value==chars&&$scope.board[1].value==chars&&$scope.board[2].value==chars)||
			($scope.board[2].value==chars&&$scope.board[5].value==chars&&$scope.board[8].value==chars)||
			($scope.board[0].value==chars&&$scope.board[3].value==chars&&$scope.board[6].value==chars)||
			($scope.board[6].value==chars&&$scope.board[7].value==chars&&$scope.board[8].value==chars)||
			($scope.board[1].value==chars&&$scope.board[4].value==chars&&$scope.board[7].value==chars)||
			($scope.board[3].value==chars&&$scope.board[4].value==chars&&$scope.board[5].value==chars)||
			($scope.board[0].value==chars&&$scope.board[4].value==chars&&$scope.board[8].value==chars)||
			($scope.board[2].value==chars&&$scope.board[4].value==chars&&$scope.board[6].value==chars)){
				$scope.playable=false;
				if(chars==1){
					$scope.result="You won! To play again, refresh website";
				}else{
					$scope.result="You lost! To play again, refresh website";
				}
			}
	}
		
		
	function tie(){
		$scope.result="Tie! To play again, refresh website";
		$scope.playable=false;
	}
	}]); 