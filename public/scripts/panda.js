myApp.service('randomServ', function($http) {
  vm = this;

  vm.newRandom = function() {
    console.log('Got a giphy');
    return $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='
    }).then(function(response) {
      console.log('yuuuuupp: ', response);
      vm.rando = response.data.data;
      console.log('rando is: ', vm.rando);
    });
  }
});
