// declare our intentions to use an Angular app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) {
  console.log('NG');
  var vm = this;
// temp start up function
  vm.startUpFunction = function() {
    console.log('I am here in startUpFunction');

  }; // end startUpFunction

  vm.randomGiphy = function() {
    console.log('Got a giphy');
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='
    }).then(function(response) {
      console.log('yuuuuupp: ', response);
      vm.rando = response.data.data;
      console.log('rando is: ', vm.rando);
    });
  };

  vm.searchGiphy = function() {
    console.log('Got a giphy');
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=' + vm.search + '&api_key=dc6zaTOxFJmzC'
    }).then(function(response) {
      console.log('back with: ', response);
      vm.search = response.data.data;
    });
  };
}); // end HttpController
