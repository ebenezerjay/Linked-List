var titleInput = document.querySelector("#title-input");
var urlInput = document.querySelector("#url-input");
var enterButton = document.querySelector("#form-enter-button");
var bookmarkSection = document.querySelector("#bookmark-section");
var bookmarkCard = document.querySelector("#bookmark-card");
var readButton = document.querySelector('#read');
var appendedUrl = document.querySelector("#appended-url");
var deleteButton = document.querySelector("#delete");

enterButton.addEventListener('click', appendCard);

function appendCard(e) {
	bookmarkSection.innerHTML = 
	`<article class="bookmark-card" id="bookmark-card">
  		<h1 class="appended-title">${titleInput.value}</h1>
  		<a href="${urlInput.value}" class="appended-url" id="appended-url">${urlInput.value}</a>
  		<br>
  		 <button type="button" class="read read-button" id="read">Read</a>
  		 <button type="button" class="delete-button" id="delete">Delete</a>
  	</article>` + bookmarkSection.innerHTML;
	var deleteButton = document.querySelector("#delete");
	var readButton = document.querySelector(".read");
	var bookmarkCard = document.querySelector("#bookmark-card");

	readButton.addEventListener('click', bookmarkRead);
	deleteButton.addEventListener('click', removeCard);
  	e.preventDefault();
}

function bookmarkRead(e) {
	var bookmarkCard = document.querySelector(".bookmark-card");
	var readButton = document.querySelector(".read");
	var appendedUrl = document.querySelector("#appended-url");
	bookmarkCard.style.backgroundColor = "#f2f4f4";
	readButton.style.color = "#f05a28";
	appendedUrl.style.textDecoration = "underline #cfd8dc";

	if (bookmarkCard.style.backgroundColor == "fff") {
	bookmarkCard.style.backgroundColor = "#f2f4f4";
	} else if (bookmarkCard.style.backgroundColor == "f2f4f4") {
		bookmarkCard.style.backgroundColor = "#fff";
	}
	if (readButton.style.color == "#455a64") {
	readButton.style.color = "#f05a25";
	} else if (readButton.style.color == "#f05a25") {
		readButton.style.color = "#455a64";
	}
	if (appendedUrl.textDecoration == "underline #f2f4f4") {
	appendedUrl.textDecoration = "underline #cfd8dc";
	} else if (appendedUrl.style.textDecoration == "underline #cfd8dc") {
		appendedUrl.style.textDecoration = "underline #f2f4f4";
	}
}

function removeCard(e) {
	bookmarkSection.innerHTML = "";
}
// function unRead(e) {
// 	var bookmarkCard = document.querySelector(".bookmark-card");
// 	var readButton = document.querySelector(".read");

// 	bookmarkCard.style.backgroundColor = "#fff";
// 	read.style.color = "#455a64";
// 	appendedUrl.textdecoration = "underline f2f4f4";
// }

	// <a href="" id="read-button" class="read-button">Read</a>
 //  		<a href="" id="delete-button" class="delete-button">Delete</a>


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

