I've picked 5 cities that I chose randomly as requested in the assignment.

Regarding data - I've used 'openweathermap' api to get the weather data and 'worldtides' api to get the tides data.

When you open the app you will see that different cities may have different backgrounds - this is because based on the
current weather (cloudy, windy, rain, etc.) I load different image for additional visual stimulation and UX.

Project structure:
index.html - loaded all the needed resources,
app/app.css - project styles,
app/app.module.js - the entry point, configuration of the services,
app/components - all the bits and pieces of the application (weather-app is the top level file),
app/services - helper function for the API requests.

I haven't used any css preprocessors because I didn't wanted to end up with complex build/watch procedure, so
everything concerning styling is in app.css.

All of my code is structured as separate components so I made heavy use of directives because this way the code is more reusable and it is a good practice to avoid controllers.

To start the app run 'npm start'. This installs and updates both 'npm' and 'bower' and runs a static server.

After 'npm finishes' simply open 'http://localhost:8080/'.

PS: The only helper library I've used was 'charts.js' and just to let you know there is a bug while hovering over the
points on the chart. I've spent good amount of time to try and fix it but apparently I couldn't. This is probably
due to tha fact that I'm using it for the first time. Nevertheless, this doesn't affect the app in any way.
