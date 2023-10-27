(function () {
  "use strict";

  angular.module("app", []);

  angular.module("app").controller("appController", appController);

  appController.$inject = ["$scope"];
  function appController($scope) {
    $scope.init = function () {
      $scope.menuItems = [
        { id: 1, name: "menu 1" },
        { id: 2, name: "menu 2" },
        { id: 3, name: "menu 3" },
        { id: 4, name: "menu 4" },
        { id: 5, name: "menu 5" },
        { ID: 6, name: "menu 6" },
      ];

      $scope.products = [
        { menuId: 1, name: "item 11" },
        { menuId: 1, name: "item 12" },
        { menuId: 1, name: "item 13" },
        { menuId: 1, name: "item 14" },
        { menuId: 1, name: "item 15" },
        { menuId: 1, name: "item 16" },
        { menuId: 1, name: "item 17" },
        { menuId: 1, name: "item 18" },
        { menuId: 2, name: "item 21" },
        { menuId: 2, name: "item 22" },
        { menuId: 2, name: "item 23" },
        { menuId: 2, name: "item 24" },
        { menuId: 2, name: "item 25" },
        { menuId: 2, name: "item 26" },
        { menuId: 2, name: "item 27" },
        { menuId: 2, name: "item 28" },
        { menuId: 3, name: "item 31" },
        { menuId: 3, name: "item 32" },
        { menuId: 3, name: "item 33" },
        { menuId: 3, name: "item 34" },
        { menuId: 3, name: "item 35" },
        { menuId: 3, name: "item 36" },
        { menuId: 3, name: "item 37" },
        { menuId: 3, name: "item 38" },
        { menuId: 4, name: "item 41" },
        { menuId: 4, name: "item 42" },
        { menuId: 4, name: "item 43" },
        { menuId: 4, name: "item 44" },
        { menuId: 4, name: "item 45" },
        { menuId: 4, name: "item 46" },
        { menuId: 4, name: "item 47" },
        { menuId: 4, name: "item 48" },
      ];
    };
  }
})();
