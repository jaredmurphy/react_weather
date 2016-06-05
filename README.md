#React Weather

###Description###
Weather App built with React, Redux, Sparklines, Open Weather API, Google Maps API, and Bootstrap. The home page prompts the user to enter in a city for a 5 day forecast. When the form is submitted, React sends the city name to Redux through the Action Controller and is intercepted by Redux-Promise, which helps us run our AJAX call to the Open Source Weather API. The response from the weather API is sent to the Weather Reducer which changes the state of the App. React then updates components to reflect the new city in the weather list component.

The weather list components shows projected temperature, humidity, and pressure for the next 5 days in each city by rendering a graph created with Sparklines, which also gives the user an average and displays the average line on the graph.

The city name is displayed by a the Google Maps API. This allows users to visually interpret this data as well as ensure that the data does not represent a different city with the same name.

Built to better understand React and Redux. 
