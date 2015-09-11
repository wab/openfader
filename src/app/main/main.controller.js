(function() {
  'use strict';

  angular
    .module('openfader')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var main = this;

    main.soirees = [
      {
        'id' : 0,
        'slug' : 'part1',
        'name' : 'openfader - part 1'
      },
      {
        'id' : 1,
        'slug' : 'part2',
        'name' : 'openfader - part 2'
      },
      {
        'id' : 2,
        'slug' : 'part3',
        'name' : 'openfader - part 3'
      },
      {
        'id' : 3,
        'slug' : 'part4',
        'name' : 'openfader - part 4'
      },
      {
        'id' : 4,
        'slug' : 'pick',
        'name' : 'openfader - Pick your djs'
      },
      {
        'id' : 5,
        'slug' : 'technorama',
        'name' : 'openfader - technorama'
      },
      {
        'id' : 6,
        'slug' : 'boo',
        'name' : 'openfader - booooo'
      },
      {
        'id' : 7,
        'slug' : 'pi',
        'name' : 'openfader - le printemps industriel'
      },
      {
        'id' : 8,
        'slug' : 'close-up',
        'name' : 'openfader - close up'
      }
    ];
  }
})();
