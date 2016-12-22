angular.module('components.city-data', ['worldTides-factory', 'setBackgroundImg-service', 'setColorTemperature-service'])
.directive('cityData', function(worldTidesFactory, setBackgroundImg, setColorTemperature, cityDataConstants, $timeout) {
    return {
        templateUrl: 'app/components/city-data/city-data.html',
        scope: {
            city: '=cityWeatherData'
        },
        controllerAs: 'cityDataCtrl',
        controller: function($scope) {
            var today = new Date();
            var nextUnixMonring = today.setHours(9, 0, 0, 0) + cityDataConstants.oneUnixDay;

            worldTidesFactory.query({
                lat: $scope.city.coord.lat,
                lon: $scope.city.coord.lon,
                length: cityDataConstants.fiveDayUnixLength,
                step: cityDataConstants.step,
                start: nextUnixMonring
            }).$promise.then((function(data) {
                this.tideData = data;
            }).bind(this));
        },
        link: function($scope, $element, $attr) {
            $scope.backgroundImgUrl = setBackgroundImg($scope.city.weather[0].main);
            $scope.backgroundGradient = setColorTemperature(Math.round($scope.city.main.temp));
        }
    };
}).constant('cityDataConstants', {
    oneUnixDay: 24 * 60 * 60 * 1000,
    fiveDayUnixLength: 345600,
    step: 86400
});
