var pokemon=angular.module("pokemon",[])
pokemon.controller("pokedex",function($scope,$rootscope,$http){
	$scope.pokedex = {};

	for (var i = 0; i < 100; i++) {
	http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
	}).the(function callbacksuccess(y){
	console.log(y)
     })
  }
})