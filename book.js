function Book(title, author, pageNumber) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.read = false;

  this.setRead = function() {
    this.read = true;
  }

  this.info = function() {
    if (this.read) {
      return this.title + ' by ' + this.author + ', ' + pageNumber + ' pages' + ', read';
    } else {
      return this.title + ' by ' + this.author + ', ' + pageNumber + ' pages' + ', not read yet.';
    }
  }
}

function addBookToLibrary(book) {
  myLibrary << book;
}

function displayLibrary(){
  myLibrary.map((book) => displayBook(book));
}

function displayBook(book) {
  const newTitle = book.title;
  const isRead = read ? " This book is read." : "This book is not yet read";
  const newDescription = "by " + book.author + " has " + book.pageNumber + " pages." + isRead;

  
  displayElement = document.getElementById("my-library");
  const newDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.appendChild(newTitle);
  p.appendChild(newDescription);
  newDiv.appendChild(h2);
  newDiv.appendChild(p);
  displayElement.appendChild(newDiv);
}



/* Code to execute */
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
const eragon = new Book("Eragon", "Christopher Paolini", 1000);
const book2 = new Book("book title", 'auhtor', 500);
const book3 = new Book('book 2', 'author3', 4009);


const myLibrary = [];

addBookToLibrary(theHobbit);
addBookToLibrary(eragon);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary();
