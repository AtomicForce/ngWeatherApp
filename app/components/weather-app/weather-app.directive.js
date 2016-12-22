angular.module('components.weather-app', ['openWeather-factory'])
.directive('weatherApp', function (openWeatherFactory, $timeout, $q) {
    return {
        templateUrl: 'app/components/weather-app/weather-app.html',
        scope: {},
        controllerAs: 'ctrl',
        controller: function() {
            var getWeatherAmsterdam = openWeatherFactory.query({location:'Amsterdam,nl'}).$promise;
            var getWeatherBurgas = openWeatherFactory.query({location:'Burgas,bg'}).$promise;
            var getWeatherNice = openWeatherFactory.query({location:'Nice,fr'}).$promise;
            var getWeatherAthens = openWeatherFactory.query({location:'Athens,gr'}).$promise;
            var getWeatherCopenhagen = openWeatherFactory.query({location:'Oslo,no'}).$promise;

            $q.all([
                getWeatherAmsterdam,
                getWeatherBurgas,
                getWeatherNice,
                getWeatherAthens,
                getWeatherCopenhagen
            ]).then((function(data) {
                this.weatherData = data;
            }).bind(this));
        }
    };
});
