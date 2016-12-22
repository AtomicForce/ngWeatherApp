angular.module('weather-app-init', [
    'components.weather-app',
    'components.city-data',
    'components.tide-chart',
    'components.weather-icon',
    'components.clear-svg',
    'components.clouds-svg',
    'components.fog-svg',
    'components.snow-svg',
    'components.storm-svg',
    'components.windy-svg',
    'openWeather-factory',
    'worldTides-factory'
]).config(function (openWeatherFactoryProvider, worldTidesFactoryProvider) {
    openWeatherFactoryProvider.setConfigs({
        endpoint: 'weather',
        apiKey: '769f282b56f12ca726d10974e814e937'
    });

    worldTidesFactoryProvider.setConfigs({
        endpoint: 'heights',
        apiKey: '577e1a1c-e9d1-4b95-9287-f882dd01935f'
    });
}).directive('weatherAppInit', function () {
    return { templateUrl: 'app/app.module.html' };
});

angular.module('weatherApp.templates', []);
