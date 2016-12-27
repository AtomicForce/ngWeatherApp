angular.module('getLocation-factory', [
    'ngResource'
]).provider('getLocationFactory', function (getLocationConfigs) {
    this.setConfigs = function (_getLocationConfigs) {
        angular.extend(getLocationConfigs, _getLocationConfigs);
    };

    this.$get = function ($resource) {
        var c = getLocationConfigs;
        var url = [c.getLocationUrl, c.endpoint].join('/');
        return $resource(url, {
            'query': { method: 'GET', isArray: false }
        });
    };
}).constant('getLocationConfigs', {
    getLocationUrl: 'http://ip-api.com',
    endpoint: null
});
