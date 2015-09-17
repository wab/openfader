(function() {
  'use strict';

  angular
    .module('openfader')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/:slug', {
        templateUrl: 'app/soiree/soiree.html',
        controller: 'SoireeController',
        controllerAs: 'soiree'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
