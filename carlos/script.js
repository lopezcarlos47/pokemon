var pokemon=angular.module("pokemon",[])
pokemon.controller("pokemon",fuction($scope,$rootScope,$http){
	http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/"
	})
})