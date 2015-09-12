var MenuService = angular.module('vegMenuService', []);

MenuService.factory('MenuService', function($http) {
	return {
		getMenu : function () {
			return $http.get("https://api.myjson.com/bins/3wfig"); //$http.get("http://localhost:8000/api/movies"); //https://api.myjson.com/bins/37rl5"); // "/json/menu.json"
		}
	}
});