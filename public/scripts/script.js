// declare our intentions to use an Angular app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function(randomServ, searchServ) {
  console.log('NG');

  var vm = this;

  // temp start up function
  vm.startUpFunction = function() {
    console.log('I am here in startUpFunction');
  }; // end startUpFunction
  
  // vm.randomGiphy = function() {
  //
  // };

  vm.whatever = function() {
    randomServ.newRandom().then(function(responseFromPanda) {
      console.log(responseFromPanda);
      vm.rando = responseFromPanda;
    });
  }

  vm.searchResp = function() {
    searchServ.searchGiphy().then(function(responseFromSearch) {
      console.log(responseFromSearch);
      vm.search = responseFromSearch;
    });
  }

}); // end HttpController
