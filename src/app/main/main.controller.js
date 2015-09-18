(function() {
  'use strict';

  angular
    .module('openfader')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $timeout, webDevTec, toastr) {
    var main = this;
    $http.get('app/soirees.json').success(function(data) {
      main.soirees = data;
    });
  }
})();