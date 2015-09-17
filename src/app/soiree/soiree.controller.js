(function() {
  'use strict';

  angular
    .module('openfader')
    .controller('SoireeController', SoireeController);


  /** @ngInject */
  function SoireeController($routeParams, $http) {
    var model = this;
    model.slug = $routeParams.slug;

    $http.get('app/soirees.json').success(function(data) {
      model.soirees = data;
    });
  }

})();