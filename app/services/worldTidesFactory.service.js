angular.module('worldTides-factory', [
    'ngResource'
]).provider('worldTidesFactory', function (worldTidesConfigs) {
    this.setConfigs = function (_worldTidesConfigs) {
        angular.extend(worldTidesConfigs, _worldTidesConfigs);
    };

    this.$get = function ($resource) {
        var c = worldTidesConfigs;
        var url = [c.worldTidesUrl, c.endpoint].join('?');
        return $resource(url + '&lat=:lat&lon=:lon&start=:start&length=:length&step=:step&key=:apiKey', {
            apiKey: c.apiKey,
            lat: '@lat',
            lon: '@lon',
            length: '@length',
            step: '@step',
            start: '@start'
        },
        {
            'query': { method: 'GET', isArray: false }
        });
    };
}).constant('worldTidesConfigs', {
    worldTidesUrl: 'https://www.worldtides.info/api',
    endpoint: null,
    apiKey: null
});
