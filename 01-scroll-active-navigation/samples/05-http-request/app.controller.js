(function () {
  "use strict";

  angular.module("app", []);

  angular.module("app").controller("appController", appController);

  appController.$inject = ["$scope"];
  function appController($scope) {
    $scope.init = function () {
      // FIXME: replace to http request
      $scope.menuItems = [
        {
          id: 1,
          name: "menu 1",
          products: [
            { id: 1, menuId: 1, name: "item 11" },
            { id: 2, menuId: 1, name: "item 12" },
            { id: 3, menuId: 1, name: "item 13" },
            { id: 4, menuId: 1, name: "item 14" },
            { id: 5, menuId: 1, name: "item 15" },
            { id: 6, menuId: 1, name: "item 16" },
            { id: 7, menuId: 1, name: "item 17" },
            { id: 8, menuId: 1, name: "item 18" },
          ],
        },
        {
          id: 2,
          name: "menu 2",
          products: [
            { id: 9, menuId: 2, name: "item 21" },
            { id: 10, menuId: 2, name: "item 22" },
            { id: 11, menuId: 2, name: "item 23" },
            { id: 12, menuId: 2, name: "item 24" },
            { id: 13, menuId: 2, name: "item 25" },
            { id: 14, menuId: 2, name: "item 26" },
            { id: 15, menuId: 2, name: "item 27" },
            { id: 16, menuId: 2, name: "item 28" },
          ],
        },
        {
          id: 3,
          name: "menu 3",
          products: [
            { id: 17, menuId: 3, name: "item 31" },
            { id: 18, menuId: 3, name: "item 32" },
            { id: 19, menuId: 3, name: "item 33" },
            { id: 20, menuId: 3, name: "item 34" },
            { id: 21, menuId: 3, name: "item 35" },
            { id: 22, menuId: 3, name: "item 36" },
            { id: 23, menuId: 3, name: "item 37" },
            { id: 24, menuId: 3, name: "item 38" },
          ],
        },
        {
          id: 4,
          name: "menu 4",
          products: [
            { id: 25, menuId: 4, name: "item 41" },
            { id: 26, menuId: 4, name: "item 42" },
            { id: 27, menuId: 4, name: "item 43" },
            { id: 28, menuId: 4, name: "item 44" },
            { id: 29, menuId: 4, name: "item 45" },
            { id: 30, menuId: 4, name: "item 46" },
            { id: 31, menuId: 4, name: "item 47" },
            { id: 32, menuId: 4, name: "item 48" },
          ],
        },
        {
          id: 5,
          name: "menu 5",
          products: [
            { id: 33, menuId: 5, name: "item 51" },
            { id: 34, menuId: 5, name: "item 52" },
            { id: 35, menuId: 5, name: "item 53" },
            { id: 36, menuId: 5, name: "item 54" },
            { id: 37, menuId: 5, name: "item 55" },
            { id: 38, menuId: 5, name: "item 56" },
            { id: 39, menuId: 5, name: "item 57" },
            { id: 40, menuId: 5, name: "item 58" },
          ],
        },
        {
          id: 6,
          name: "menu 6",
          products: [
            { id: 41, menuId: 6, name: "item 61" },
            { id: 42, menuId: 6, name: "item 62" },
            { id: 43, menuId: 6, name: "item 63" },
            { id: 44, menuId: 6, name: "item 64" },
            { id: 45, menuId: 6, name: "item 65" },
            { id: 46, menuId: 6, name: "item 66" },
            { id: 47, menuId: 6, name: "item 67" },
            { id: 48, menuId: 6, name: "item 68" },
          ],
        },
      ];
    };
  }
})();
