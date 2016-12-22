angular.module('components.tide-chart', [])
.directive('tideChart', function (tideChartConstants, generateChartData, generateChartLabels, $timeout) {
    return {
        templateUrl: 'app/components/tide-chart/tide-chart.html',
        scope: {
            data: '=tideData',
            city: '=tideCity'
        },
        link: function ($scope, $element, $attr) {
            var dayOfWeek = new Date().getDay();
            var chartLabels = generateChartLabels(tideChartConstants.days, dayOfWeek);
            var chartData = generateChartData($scope.data.heights);

            $timeout(function() {
                var chartId = $scope.city + 'TideChart';
                var ctx = document.getElementById(chartId).getContext('2d');

                var tideChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: chartLabels,
                        datasets: [{
                            label: 'Tides for next 5 days at 9am',
                            data: chartData,
                            backgroundColor: tideChartConstants.chartBackgroundColor,
                            borderColor: tideChartConstants.chartBorderColor,
                            borderWidth: 1
                        }]
                    },
                    options: tideChartConstants.chartOptions
                });
            });
        }
    };
}).factory('generateChartData', function() {
    return function(rawTideData) {
        var data = [];

        rawTideData.forEach(function(el) {
            data.push(el.height);
        });

        return data;
    };
}).factory('generateChartLabels', function() {
    return function(week, currentDayIndex) {
        var chartLabels = [];
        var index = 4;
        var dayIndex = currentDayIndex + 1;

        while (index >= 0) {
            if (dayIndex <= week.length) {
                chartLabels.push(week[dayIndex]);
                dayIndex++;
                index--;
            } else {
                dayIndex = 0;
            }
        }

        return chartLabels;
    };
}).constant('tideChartConstants', {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    chartOptions: {
        responsive: true,
        legend: {
            labels: {
                fontColor: '#fff'
            }
        },
        scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#fff'
                    },
                    gridLines: {
                        color: '#fff'
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#fff'
                    },
                    gridLines: {
                        color: '#fff'
                    }
                }]
            }
    },
    chartBackgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
    ],
    chartBorderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]
});
