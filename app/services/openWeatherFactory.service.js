angular.module('openWeather-factory', [
    'ngResource'
]).provider('openWeatherFactory', function (openWeatherConfigs) {
    this.setConfigs = function (_openWeatherConfigs) {
        angular.extend(openWeatherConfigs, _openWeatherConfigs);
    };

    this.$get = function ($resource) {
        var c = openWeatherConfigs;
        var url = [c.openWeatherUrl, c.endpoint].join('/');
        return $resource(url + '?q=:location&units=:units&appid=:apiKey', {
            apiKey: c.apiKey,
            units: c.units,
            location: '@location'
        },
        {
            'query': { method: 'GET', isArray: false }
        });
    };
}).constant('openWeatherConfigs', {
    openWeatherUrl: 'http://api.openweathermap.org/data/2.5',
    endpoint: null,
    apiKey: null,
    units: 'metric'
});
