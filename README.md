# Implementing a Mortgage Affordability Calculator with Zillow's API

## 1. Create the Basic HTML Page and include jQuery
I created the basic HTML page and included a div with the id of #results. I used jQuery in my application by including it from Google Hosted Libraries.

## 2. Create a Form
In my HTML page, I created a form element that has an input type of submit. 

## 3. JavaScript File
I created an app.js file and included it after my HTML body. Inside my app.js file, I made two event handlers:
* One to hide the #results div 

```$("#results").hide();
```

* One for form submission

```$("form").on("submit", function(event){
	event.preventDefault();

	// More code here
	});
```

The preventDefault() method was needed to stop the page from refreshing. 

## 4. AJAX Request
With the input supplied in the form, I sent an AJAX GET request to Zillow's API, including an event handler that will remove any content in the #results div. 

```$("#results").empty();
``` 

This will ensure that every time the form is submitted, only the results of newly submitted information will be show.

Upon success of that request, I created an event handler to show the results obtained from the API. 

```$("#results").show();
``` 

I appended these results in a table to the #results div.

## 5. Design
When the calculator was functional, I included Twitter Bootstrap and customized CSS to make the calculator more visually appealing.