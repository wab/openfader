(function() {
  'use strict';

  angular
    .module('openfader')
    .controller('GalleryController', GalleryController);


  /** @ngInject */
  function GalleryController($http) {
    var model = this;
    $http.get('app/soirees.json').success(function(data) {
      model.soirees = data;
    });
  }

})();