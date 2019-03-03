var titleInput = document.querySelector(".title-input");
var urlInput = document.querySelector(".website-url");
var enterButton = document.querySelector("#form-enter-button");
var bookMarkSection = document.querySelector("#bookmark-section");

enterButton.addEventListener('click', appendCard);

console.log(titleInput);
function appendCard(e) {
	bookMarkSection.innerHTML = 
	`<article class="bookmark-card">
  		<h1 class="appended-title">${titleInput}</h1>
  		<a href="${urlInput}" class="appended-url">${urlInput}</a>
  		<br>
  		<a href="" class="read-button">Read</a>
  		<a href="" class="delete-button">Delete</a>
  	</article>` + bookMarkSection.innerHTML;
}









//Create a form with two inputs, one for Title, and one for a URL.

//Create a button that says "Enter". And have it listen to (onclick). And a function
// that appends a bookmark card into the right section of the page.

//Add a button ('Read') to the appeneded card. With a class of .read, so that
//after the button is clicked it becomes red and the card background is darker. 

//Use a conditional that says, if .read button has been clicked, when it is clicked again
//it removes the .read styles (back to normal).

//Add an eventListener for the Delete button, so when its clicked the appended bookmark
//card will be removed from the page.

//Create a function with a conditional that says, if either the title input or the 
//url input is empty, an error message should appear on page or an alert. Change
//innerText of input placeholders to say "Enter Title here" and "Enter URL here".

//Create a function that enables the Enter button. Use conditional that says
//if either the Title input or the URL input is empty than the Enter button doesnt work.

//Use 1 or less media queries to make the site responsive.

//Create a function that keeps count of the total number of links on the page.
//And keeps track of how many of the links have been read and are unread.

//Add a "Clear Read Bookmarks" button that removes all the read bookmarks from 
//the page.

//Create a function that disables the Enter button if the URL isn't valid.

