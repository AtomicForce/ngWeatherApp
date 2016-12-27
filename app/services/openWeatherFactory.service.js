angular.module('openWeather-factory', [
    'ngResource'
]).provider('openWeatherFactory', function (openWeatherConfigs) {
    this.setConfigs = function (_openWeatherConfigs) {
        angular.extend(openWeatherConfigs, _openWeatherConfigs);
    };

    this.$get = function ($resource) {
        var c = openWeatherConfigs;
        var url = c.openWeatherUrl;
        return $resource(url + '/:endpoint?q=:location&units=:units&appid=:apiKey', {
            apiKey: c.apiKey,
            units: c.units,
            endpoint: '@endpoint',
            location: '@location'
        },
        {
            'query': { method: 'GET', isArray: false }
        });
    };
}).constant('openWeatherConfigs', {
    openWeatherUrl: 'http://api.openweathermap.org/data/2.5',
    apiKey: null,
    units: 'metric'
});
