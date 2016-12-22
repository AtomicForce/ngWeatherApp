angular.module('components.weather-icon', [])
.directive('weatherIcon', function () {
    return {
        templateUrl: 'app/components/weather-icon/weather-icon.html',
        scope: { type: '=weatherType' }
    };
});
