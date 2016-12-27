angular.module('components.weather-app', ['openWeather-factory', 'getLocation-factory'])
.directive('weatherApp', function (openWeatherFactory, getLocationFactory, $timeout, $q) {
    return {
        templateUrl: 'app/components/weather-app/weather-app.html',
        scope: {},
        controllerAs: 'ctrl',
        controller: function($scope) {
            getLocationFactory.get().$promise.then(function(data) {
                var city = data.city + ',' + data.countryCode;

                openWeatherFactory.query({location: city, endpoint: 'weather'}).$promise.then(function(data) {
                    $scope.weatherData = data;
                });
            });
        },
        link: function($scope, $element) {
            $scope.autocomplete = '';

            $scope.fetchCity = function(e) {
                if (e.keyCode === 13) {
                    openWeatherFactory.query({
                        location: $scope.autocomplete,
                        endpoint: 'weather'
                    }).$promise.then(function(data) {
                        $scope.weatherData = data;
                    });
                }
            };
        }
    };
});
