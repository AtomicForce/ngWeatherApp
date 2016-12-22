angular.module('setColorTemperature-service', []).factory('setColorTemperature', function() {
    return function(temp) {
        var leftSide, rightSide;
        var temps = [-2, 3, 8, 13, 18, 23, 28, 33, 38];

        if (temp < 18) {
            leftSide = temps.splice(0, temps.length/2);

            return 'linear-gradient(rgba(' + _calcDegree(leftSide) + ', 0, 200, 0.5), rgba(0, 0, 200, 0.5))';
        } else if (temp > 18) {
            rightSide = temps.splice(temps.length/2, temps.length);

            return 'linear-gradient(rgba(200, 0, 200, 0.5), rgba(' + _calcDegree(rightSide) + ', 0, 200, 0.5))';
        } else {
            return 'linear-gradient(rgba(200, 0, 200, 0.5), rgba(0, 0, 200, 0.5))';
        }

        function _calcDegree(tempArr) {
            var colorR = 0;

            tempArr.forEach(function(el) {
                if (temp > el) {
                    colorR += 50;
                }
            });

            return colorR;
        }
    };
});
