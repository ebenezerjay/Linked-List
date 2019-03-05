var titleInput = document.querySelector("#title-input");
var urlInput = document.querySelector("#url-input");
var enterButton = document.querySelector("#form-enter-button");
var bookmarkSection = document.querySelector("#bookmark-section");
var cardCounter = 0;


enterButton.addEventListener('click', appendCard);
enterButton.addEventListener('click', function(e) {
	if (titleInput.value === "" || urlInput.value === "") {
		alert("Please Enter a title and/or URL");
	} 
	
});

function appendCard(e) {
	cardCounter = cardCounter + 1;
	var bookmarkId = "bookmark-card" + cardCounter;
	var appendUrlId = "appended-url" + cardCounter;
	var readId = "read" + cardCounter;
	var deleteId = "delete-button" + cardCounter;
	bookmarkSection.innerHTML = 
	`<article class="bookmark-card" id="${bookmarkId}" data-card="${cardCounter}">
  		<h1 class="appended-title">${titleInput.value}</h1>
  		<a href="${urlInput.value}" class="appended-url" 
  		id="${appendUrlId}">${urlInput.value}</a>
  		 <button type="button" class="read" data-card="${cardCounter}" 
  		 data-cardRead="0" id="${readId}">Read</button>
  		 <button type="button" class="delete-button" data-card="${cardCounter}"
  		 id="${deleteId}">Delete</button>
  	</article>` + bookmarkSection.innerHTML;
	var deleteButtonArray = document.querySelectorAll(".delete-button");
	var readButtonArray = document.querySelectorAll(".read");

	for (var i = 0; i < readButtonArray.length; i++) {
		readButtonArray[i].addEventListener('click', bookmarkRead);
	}

	for (var i = 0; i < deleteButtonArray.length; i++) {
		deleteButtonArray[i].addEventListener('click', removeCard);
	}
  	e.preventDefault();
}

function bookmarkRead(e) {
	var bookmarkId = "bookmark-card" + e.target.getAttribute("data-card");
	var readId = "read" + e.target.getAttribute("data-card");
	var appendUrlId = "appended-url" + e.target.getAttribute("data-card");
	var isCardRead = e.target.getAttribute("data-cardRead");
	var bookmarkCard = document.querySelector("#" + bookmarkId);
	var readButton = document.querySelector("#" + readId);
	var appendedUrl = document.querySelector("#" + appendUrlId);

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


function removeCard(e) {
	var deleteButtonArray = document.querySelectorAll(".delete-button");
	var deleteButtonId = "delete-button" + e.target.getAttribute("data-card");
	var deleteId = document.querySelector("#" + deleteButtonId);
	var bookmarkId = "bookmark-card" + e.target.getAttribute("data-card");
	var bookmarkCard = document.querySelector("#" + bookmarkId);
	var deleteCard = document.getElementById(bookmarkId);
	deleteCard.classList.remove("bookmark-card");
}

// function preventEnter(e) {
// 	if ()
// }






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

