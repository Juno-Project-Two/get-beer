// Minimum Viable Product - MVP

// Create an App object {GetMeBeer}

GetMeeBeerApp = {}

GetMeeBeerApp.init = {}


fetch('https://api.openbrewerydb.org/breweries')
.then(function(response){
  return response.json();
})
.then(function(jsonResult){
  console.log('It worked!', jsonResult);
};

// Generate a dropdown with the list of breweries accordingy the user filter selection (we need to review the API, in order to make the filters and dropdown as optimal as possible)

//Create an init method when the user starts the search

//Fetch the desired data using the correct params

// Append the results to the page

// Clear the results before the next search

// ** Extra features


//Allow the user to select from the search list, and add them to their preferred list

//Add a clear user selection button

//Add multiple search filters

//Add a form that allows the user to have their brewery added to the list

// Add a map section to reflect the selected area


