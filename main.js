var titleInput = document.querySelector("#title-input");
var urlInput = document.querySelector("#url-input");
var enterButton = document.querySelector("#form-enter-button");
var bookmarkSection = document.querySelector("#bookmark-section");
var bookmarkCounter = 0;
var cardCounter = 0;
var bookmarkCounterSection = document.querySelector("#bookmark-counters");
urlInput.addEventListener('input', function(e) {
	document.getElementById("form-enter-button").disabled = false;
});

enterButton.addEventListener('click', disableEnterButton);


function disableEnterButton(e) {
	if (titleInput.value === "" || urlInput.value === "") {
		document.getElementById("form-enter-button").disabled = true;
		alert("Please enter a title and valid URL")
	} else {
		enableButton();
	} 
	e.preventDefault();
}

function enableButton() {
	document.getElementById("form-enter-button").disabled = false;
	appendCard();
	displayCounters();
}

function appendCard() {
	cardCounter = cardCounter + 1;
	var bookmarkId = "bookmark-card" + cardCounter;
	var appendUrlId = "appended-url" + cardCounter;
	var readId = "read" + cardCounter;
	var deleteId = "delete-button" + cardCounter;
	var deleteButton = document.querySelectorAll('.delete-button');
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
	var	 bookmarksArray = document.querySelectorAll(".bookmark-card");

	for (var i = 0; i < readButtonArray.length; i++) {
		readButtonArray[i].addEventListener('click', bookmarkRead);
	}

	for (var i = 0; i < deleteButtonArray.length; i++) {
		deleteButtonArray[i].addEventListener('click', removeCard);
	}
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
	readButton.style.backgroundColor = "#f2f4f4";
	} else {
		readButton.style.color = "#455a64";
		readButton.style.backgroundColor = "#fff";
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
	displayCounters();
}

function displayCounters() {
	var bookmarkArray = document.querySelectorAll(".bookmark-card");
	var readButtonArray = document.querySelectorAll(".read[data-cardRead = '1']");
	var unreadButtonArray = document.querySelectorAll(".read[data-cardRead = '0'");
	bookmarkCounterSection.innerHTML = 
	`<h4 class="counter-headings">Total bookmarks on page ${bookmarkArray.length}</h4>
	 <h4 class="counter-headings">Bookmarks read ${readButtonArray.length}</h4>
	 <h4 class="counter-headings">Unread bookmarks ${unreadButtonArray.length}</h4>
	` 
	// var clearButton = document.querySelector(".clear-button");
	// clearButton.addEventListener('click', clearAllread);
}

function removeCard(e) {
	event.target.parentElement.remove();
	displayCounters();
	e.preventDefault();
}

// function clearAllread(e) {
// 	var cardRead = document.querySelectorAll(".read[data-cardRead = '0']");
// 	cardRead = 0;
// 	e.preventDefault();
// }



//Create a function that keeps count of the total number of links on the page.
//And keeps track of how many of the links have been read and are unread.

//Add a "Clear Read Bookmarks" button that removes all the read bookmarks from 
//the page.

//Create a function that disables the Enter button if the URL isn't valid.

