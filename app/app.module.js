angular.module('weather-app-init', [
    'components.weather-app',
    'components.city-data',
    'components.weather-icon',
    'components.clear-svg',
    'components.clouds-svg',
    'components.fog-svg',
    'components.snow-svg',
    'components.storm-svg',
    'components.windy-svg',
    'openWeather-factory',
    'getLocation-factory'
]).config(function (openWeatherFactoryProvider, getLocationFactoryProvider) {
    openWeatherFactoryProvider.setConfigs({
        endpoint: 'weather',
        apiKey: '769f282b56f12ca726d10974e814e937'
    });

    getLocationFactoryProvider.setConfigs({
        endpoint: 'json'
    });
}).directive('weatherAppInit', function () {
    return { templateUrl: 'app/app.module.html' };
});

angular.module('weatherApp.templates', []);
