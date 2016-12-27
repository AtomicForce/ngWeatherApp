angular.module('components.city-data', ['openWeather-factory', 'setBackgroundImg-service', 'setColorTemperature-service'])
.directive('cityData', function(openWeatherFactory, setBackgroundImg, setColorTemperature, cityDataConstants) {
    return {
        templateUrl: 'app/components/city-data/city-data.html',
        scope: {
            city: '=cityWeatherData'
        },
        link: function($scope) {
            $scope.weatherForecast = [];

            $scope.$watch("city", function() {
                var d = new Date();
                var dayCounter = d.getDay();
                var weatherForecast = [];

                openWeatherFactory.query({
                    location: $scope.city.name,
                    endpoint: 'forecast/daily'
                }).$promise.then(function(data) {
                    for (var i = 0; i <= 4; i++) {
                        if (dayCounter >= cityDataConstants.weekday.length - 1) {
                            dayCounter = 0
                        } else {
                            dayCounter += 1
                        }

                        if (data.list[i].weather[0].main !== '') {
                            weatherForecast.push({
                                day: cityDataConstants.weekday[dayCounter],
                                forecast: data.list[i]
                            })
                        }
                    }

                    $scope.weatherForecast = weatherForecast;
                });

                $scope.backgroundImgUrl = setBackgroundImg($scope.city.weather[0].main);
                $scope.backgroundGradient = setColorTemperature(Math.round($scope.city.main.temp));
            });
        }
    };
}).constant('cityDataConstants', {
    weekday: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
});
