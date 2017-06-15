myApp.service('searchServ', function($http) {
  vm = this;

  vm.searchGiphy = function() {
    console.log('Got a giphy');
    return $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=' + vm.search + '&api_key=dc6zaTOxFJmzC'
    }).then(function(response) {
      console.log('back with: ', response);
      vm.imgResp = response.data.data;
    });
  };
});
