angular.module('components.city-data', ['setBackgroundImg-service', 'setColorTemperature-service'])
.directive('cityData', function(setBackgroundImg, setColorTemperature, $timeout) {
    return {
        templateUrl: 'app/components/city-data/city-data.html',
        scope: {
            city: '=cityWeatherData'
        },
        link: function($scope) {
            $scope.backgroundImgUrl = setBackgroundImg($scope.city.weather[0].main);
            $scope.backgroundGradient = setColorTemperature(Math.round($scope.city.main.temp));
        }
    };
});
