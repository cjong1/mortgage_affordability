Implementing a Mortgage Affordability Calculator with Zillow's API

Create the Basic HTML Page and include jQuery
I created the basic HTML page and included two divs, one with the id of #results. I used jQuery in myapplication by including jQuery from Google.

Create a Form
2. In my HTML page, I created a form element that has an input type of submit. 

JavaScript File
3. I created an app.js file and included it after my HTML body. Inside my app.js file, I made two event handlers, one to hide the #results div and one for form submission. The preventDefault() method was needed to stop the page from refreshing. 

AJAX Request
4. With the input supplied in the form, I sent an AJAX GET request to Zillow's API. Upon success of that request, I created an event handeler to show the results derived from the API. I appended these results in a table to the #results div.