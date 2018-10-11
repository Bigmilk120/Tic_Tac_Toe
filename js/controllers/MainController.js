app.controller('MainController', ['$scope', function($scope) { 
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
	
	$iterator=0;
	
	
	$scope.change=function(i){
		if($scope.board[i].value==0){
			$scope.board[i].value=1;
			$scope.board[i].src="circle.jpg";
			if(ifLost(true)){
				
			}else{
				$iterator++;
				if($iterator==5){
					tie();
				}else{
					AI_move();
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
	
	function ifLost(){
		if($scope.board[0]==2&&$scope.board[1]==2&&$scope.board[2]==2)
			return true;
		if($scope.board[2]==2&&$scope.board[5]==2&&$scope.board[8]==2)
			return true;
		if($scope.board[0]==2&&$scope.board[3]==2&&$scope.board[6]==2)
			return true;
		if($scope.board[6]==2&&$scope.board[7]==2&&$scope.board[8]==2)
			return true;
		if($scope.board[1]==2&&$scope.board[4]==2&&$scope.board[7]==2)
			return true;
		if($scope.board[3]==2&&$scope.board[4]==2&&$scope.board[5]==2)
			return true;
		if($scope.board[0]==2&&$scope.board[4]==2&&$scope.board[8]==2)
			return true;
		if($scope.board[2]==2&&$scope.board[4]==2&&$scope.board[6]==2)
			return true;
		return false;
	}
	
	function tie(){
		
		
	}
	
	
}]); 