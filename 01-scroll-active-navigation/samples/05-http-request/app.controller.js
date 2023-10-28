(function () {
	"use strict";

	angular.module("app", []);

	angular.module("app").controller("appController", appController);

	appController.$inject = ["$scope", "$http"];
	function appController($scope, $http) {
		$scope.init = async function () {
			var url = "./data.json";
			var res = await $http({ url });

			var dbCategories = res.data;

			$scope.menuItems = dbCategories;

			// render http request result
			$scope.$applyAsync();

			// active slider after angular js render for slick to work correctly
			$scope.activateSlider(dbCategories);
		};

		$scope.activateSlider = function (menuItems) {
			// fetch target tag
			var slider = $(".slick-slider");

			// append child
			menuItems.forEach((menuItem) => {
				var slide = `<li class="slide">
					<a href="#menuItem${menuItem.id}">${menuItem.name}</a>
				</li>`;

				slider.append(slide);
			});

			// render slider
			$(slider).slick({
				// dots: true,
				infinite: true,

				// add this when item size is changed
				variableWidth: true,

				speed: 300,
				prevArrow:
					'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
				nextArrow:
					'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
			});
		};
	}
})();
