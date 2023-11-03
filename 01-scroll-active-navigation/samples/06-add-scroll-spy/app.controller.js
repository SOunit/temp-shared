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
			await $scope.$applyAsync();

			// active slider after angular js render for slick to work correctly
			$scope._activateSlider(dbCategories);

			$scope._addClickEventToNavItems();
			$scope._addClickEventToArrows();

			$scope._addScrollSpy();
		};

		$scope._addScrollSpy = function () {
			$(document).ready(function () {
				console.log("add scroll spy start==================");

				$scope.menuItems.forEach((menuItem, index) => {
					console.log("$scope._addScrollSpy", { menuItem });
					var menuItemId = menuItem.id;
	
					var prefix = "#menuItem";
					var startQueryKey = `${prefix}${menuItemId}`;
					var startTargetTag = $(startQueryKey);
					var menuItemName = menuItem.name;
					console.log({prefix, startQueryKey, startTargetTag});
	
					startTargetTag.waypoint({
						handler: function (direction) {
							console.log("scroll event triggered", {menuItemName, index});
							if (direction === "down" || direction === "up") {
								var slider = $(".slick-slider");
								slider.slick("slickGoTo", index);
							}
						},
						offset: "0",
					});
				});
				
				console.log("add scroll spy end==================");
			})
		};

		$scope._addClickEventToArrows = function () {
			var arrows = document.querySelectorAll(".slick-arrow");
			console.log({ arrows });

			arrows.forEach(function (arrow) {
				arrow.addEventListener("click", function () {
					var slider = $(".slick-slider");
					var currentSlideIndex = slider.slick("slickCurrentSlide");

					var targetNavItem = document.querySelector(
						`.js-nav-item-${currentSlideIndex}`
					);

					console.log({ currentSlideIndex, targetNavItem });

					// click nav to scroll to the target section
					targetNavItem.click();
				});
			});
		};

		$scope._addClickEventToNavItems = function () {
			var navItems = document.querySelectorAll(".js-nav-item");
			console.log({ navItems });

			// Loop through the elements and add a click event handler to each
			navItems.forEach(function (navItem) {
				navItem.addEventListener("click", function () {
					// Your click event handler code here
					var index = navItem.getAttribute("data-menu-item-index");
					console.log("Element clicked: " + index);

					var slider = $(".slick-slider");
					slider.slick("slickGoTo", index);
				});
			});
		};

		$scope.test = function () {
			console.log("test");
		};

		$scope._activateSlider = function (menuItems) {
			// fetch target tag
			var slider = $(".slick-slider");

			// append child
			menuItems.forEach((menuItem, index) => {
				var slide = `<li class="slide nav-item js-nav-item" data-menu-item-index="${index}">
					<a href="#menuItem${menuItem.id}" class="js-nav-item-${index}">${menuItem.name}</a>
				</li>`;

				slider.append(slide);
			});

			// center config from docs, left space is empty
			var config1 = {
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,
			};

			// works fine but without center
			var config2 = {
				dots: false,
				infinite: true,

				// add this when item size is changed
				variableWidth: true,

				speed: 300,
				prevArrow:
					'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
				nextArrow:
					'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
			};

			// render slider
			$(slider).slick(config2);
		};
	}
})();
