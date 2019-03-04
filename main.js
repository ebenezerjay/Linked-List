var titleInput = document.querySelector("#title-input");
var urlInput = document.querySelector("#url-input");
var enterButton = document.querySelector("#form-enter-button");
var bookmarkSection = document.querySelector("#bookmark-section");
var cardCounter = 0;

enterButton.addEventListener('click', appendCard);

function appendCard(e) {
	cardCounter = cardCounter + 1;
	var bookMarkId = "bookmark-card" + cardCounter;
	var appendUrlId = "appended-url" + cardCounter;
	var readId = "read-button" + cardCounter;
	var deleteId = "delete-button" + cardCounter;
	bookmarkSection.innerHTML = 
	`<article class="bookmark-card" id="${bookMarkId}" >
  		<h1 class="appended-title">${titleInput.value}</h1>
  		<a href="${urlInput.value}" class="appended-url" id="${appendUrlId}">${urlInput.value}</a>
  		<br>
  		 <button type="button" class="read-button" data-card="${cardCounter}" data-cardRead="0" id="${readId}">Read</a>
  		 <button type="button" class="delete-button" id="${deleteId}">Delete</a>
  	</article>` + bookmarkSection.innerHTML;
	var deleteButtonArray = document.querySelectorAll(".delete-button");
	var readButtonArray = document.querySelectorAll(".read-button");


	for (var i = 0; i < readButtonArray.length; i++) {
		readButtonArray[i].addEventListener('click', bookmarkRead);
	}

  	e.preventDefault();
}

function bookmarkRead(e) {
	console.log(e.target.getAttribute("data-card"));
	var bookMarkId = "bookmark-card" + e.target.getAttribute("data-card");
	var readId = "read-button" + e.target.getAttribute("data-card");
	var appendUrlId = "appended-url" + e.target.getAttribute("data-card");
	var isCardRead = e.target.getAttribute("data-cardRead");
	var bookmarkCard = document.querySelector("#" + bookMarkId);
	var readButton = document.querySelector("#" + readId);
	var appendedUrl = document.querySelector("#" + appendUrlId);
	// bookmarkCard.style.backgroundColor = "#f2f4f4";
	// readButton.style.color = "#f05a28";
	// appendedUrl.style.textDecoration = "underline #cfd8dc";

	// readButton.addEventListener('click', unRead);
	alert(bookmarkCard.style.color);
	if (isCardRead == 0 ){
	bookmarkCard.style.backgroundColor = "#f2f4f4";
	} else {
		bookmarkCard.style.backgroundColor = "#fff";
	}
	if (isCardRead == 0) {
	readButton.style.color = "#f05a25";
	} else {
		readButton.style.color = "#455a64";
	}
	if (isCardRead == 0) {
	appendedUrl.textDecoration = "underline #cfd8dc";
	} else {
		appendedUrl.style.textDecoration = "underline #f2f4f4";
	}
	if (isCardRead == 0) {
		e.target.setAttribute("data-cardRead", 1);
	} else {
		e.target.setAttribute("data-cardRead", 0)
	}
}

// function unRead(e) {
// 	var bookmarkCard = document.querySelector(".bookmark-card");
// 	var readButton = document.querySelector(".read");
// 	var appendedUrl = document.querySelector("#appended-url");


// 	if (bookmarkCard.style.backgroundColor == "#fff") {
// 	bookmarkCard.style.backgroundColor = "#f2f4f4";
// 	} else if (bookmarkCard.style.backgroundColor == "f2f4f4") {
// 		bookmarkCard.style.backgroundColor = "#fff";
// 	}
// 	if (readButton.style.color == "#455a64") {
// 	readButton.style.color = "#f05a25";
// 	} else if (readButton.style.color == "#f05a25") {
// 		readButton.style.color = "#455a64";
// 	}
// 	if (appendedUrl.textDecoration == "underline #f2f4f4") {
// 	appendedUrl.textDecoration = "underline #cfd8dc";
// 	} else if (appendedUrl.style.textDecoration == "underline #cfd8dc") {
// 		appendedUrl.style.textDecoration = "underline #f2f4f4";
// 	}
// }

function removeCard(e) {
	bookmarkSection.innerHTML = "";	
}


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

