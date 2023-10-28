(function () {
	"use strict";

	angular.module("app", []);

	angular.module("app").controller("appController", appController);

	appController.$inject = ["$scope", "$http"];
	function appController($scope, $http) {
		$scope.init = async function () {
			var url = "./data.json";
			var res = await $http({ url });

			console.log("init $http", { res });

			var dbCategories = res.data;

			$scope.menuItems = dbCategories;
		};
	}
})();
