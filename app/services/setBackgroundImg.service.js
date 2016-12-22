angular.module('setBackgroundImg-service', []).factory('setBackgroundImg', function() {
    return function(status) {
        switch (status) {
            case 'Rain':
                return "http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Drizzle':
                return "http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Clear':
                return "http://pexels.imgix.net/photos/3032/summer-ray-of-sunshine-bikes-bicycles.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Clouds':
                return "http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Thunderstorm':
                return "http://pexels.imgix.net/photos/2271/clouds-cloudy-field-meadow.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Snow':
                return "http://pexels.imgix.net/photos/2377/snow-black-and-white-street-winter.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Mist':
                return "http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Fog':
                return "http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853";
                break;
            case 'Haze':
                return "http://pexels.imgix.net/photos/5281/city-sky-skyline-australia.jpg?fit=crop&w=1600&h=853";
                break;
            default:
                return "http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853";
        }
    };
});
