'use strict';

angular.module('weatherApp')
.controller('CurrentCtrl', function ($scope) {

  $scope.defaultlocation="";

  $scope.show = false;
  $scope.current = null;

  $scope.randomWeather = [        
    {
      temp: 70,
      clouds: 'Sunny',
      chanceofrain: 'low',
      pic: 'http://www.clipartbest.com/cliparts/di6/kg4/di6kg45i9.gif'
    },
    {
      temp: 50,
      clouds: 'Cloudy',
      chanceofrain: 'medium',
      pic: 'http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg'
    },
    {
      temp: 35,
      clouds: 'Rainy',
      chanceofrain: 'high',
      pic: 'http://icons.iconarchive.com/icons/large-icons/large-weather/512/rain-icon.png'
    },
    {
      temp: 10,
      clouds: 'Snowy',
      chanceofrain: 'high',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Snow.svg/1024px-Snow.svg.png'
    },
    {
      temp: 22,
      clouds: 'Raining Cats and Dogs',
      chanceofrain: 'very high',
      pic:'http://dl.glitter-graphics.com/pub/1759/1759189nqx3zecp43.gif'
    },
    {
      temp: 110,
      clouds: 'Raining fire',
      chanceofrain: 'very high',
      pic:'https://0.s3.envato.com/files/93954356/Fire-Rain-preview.jpg'
    },
    {
      temp: 35,
      clouds: 'Rainy',
      chanceofrain: 'high',
      pic: 'http://icons.iconarchive.com/icons/large-icons/large-weather/512/rain-icon.png'
    },
    {
      temp: 10,
      clouds: 'Snowy',
      chanceofrain: 'high',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Snow.svg/1024px-Snow.svg.png'
    },
    {
      temp: 22,
      clouds: 'Raining Cats and Dogs',
      chanceofrain: 'very high',
      pic:'http://dl.glitter-graphics.com/pub/1759/1759189nqx3zecp43.gif'
    },
    {
      temp: 110,
      clouds: 'Raining fire',
      chanceofrain: 'very high',
      pic:'https://0.s3.envato.com/files/93954356/Fire-Rain-preview.jpg'
    },
    {
      temp: 22,
      clouds: 'Raining Cats and Dogs',
      chanceofrain: 'very high',
      pic:'http://dl.glitter-graphics.com/pub/1759/1759189nqx3zecp43.gif'
    },
  ]

  $scope.random = function myFunction() {
    var x = Math.floor((Math.random() * 10));
    console.log(x);

    return x;
  };

  $scope.getWeather = function() {
    if ($scope.defaultlocation == "") {
      $scope.defaultlocation = 'Provo';
    }
    $scope.show = true;
    console.log($scope.current);
    $scope.current = $scope.randomWeather[$scope.random()];
    console.log($scope.current);

  };

});
