var app = angular.module("MyApp",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	});
	$stateProvider.state('chercher', {
		url: '/chercher',
		templateUrl: 'views/chercher.html',
		controller: 'MyController'
	});
	$stateProvider.state('newProduit', {
		url: '/newProduit',
		templateUrl: 'views/newProduit.html',
		controller: 'NewProduitController'
	});
});

app.controller("HomeController", function(){
	
});

app.controller("MyController", function($scope,$http){
	
	$scope.pageProduits = null;
	$scope.motCle = "";
	$scope.pageCourante = 0;
	$scope.size = 4;
	$scope.pages = [];
	
	$scope.chercherProduits = function(){
		$http.get("http://localhost:8080/chercherProduits?mc="+$scope.motCle
				 +"&page="+$scope.pageCourante+"&size="+$scope.size)
		.then(function(data){
			$scope.pageProduits = data.data;
			console.log($scope.pageProduits);
			$scope.pages = new Array($scope.pageProduits.totalPages);
			console.log($scope.pages.length);
		});
	}
	
	$scope.getProduits = function(){
		$scope.pageCourante = 0;
		$scope.chercherProduits();
	}
	
	$scope.goToPage = function(page){
		$scope.pageCourante = page;
		$scope.chercherProduits();
	}

});

app.controller("NewProduitController", function($scope, $http){
	$scope.produit = {};
	
	$scope.save = function(){
		$http.post("http://localhost:8080/produit", $scope.produit)
		.then(function(data){
			alert(data);
		});
	}
});