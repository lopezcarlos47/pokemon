// Write your code here
var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("pokedex",function($scope,$rootScope,$http){
	$scope.pokedexB = [];
	for(var y=1;y<=100;y++){
		$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/"+y
	}).then(function pokedex(x){
		$scope.pokedexB.push(x);
	})
	}
	
});