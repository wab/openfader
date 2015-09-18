(function() {
  'use strict';

  angular
    .module('openfader')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
