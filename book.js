const myLibrary = [];

function Book(title, author, pageNumber, read = false) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.read = read;

  this.setRead = function() {
    this.read = true;
  }

  this.setUnRead = function() {
    this.read = false;
  }

  this.info = function() {
    if (this.read) {
      return this.title + ' by ' + this.author + ', ' + this.pageNumber + ' pages' + ', read';
    } else {
      return this.title + ' by ' + this.author + ', ' + this.pageNumber + ' pages' + ', not read yet.';
    }
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBook(book);
}

function displayBook(book) {
  /* create a book card */
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  /** create content of book-card */
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;
  
  const bookDescription = document.createElement('p');
  bookDescription.textContent = "by " + book.author + " has " + book.pageNumber + " pages.";

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "delete book";
  deleteButton.addEventListener('click', () => {deleteBook(book, bookCard);});

  const readButton = document.createElement('button');
  readButton.id = 'read-status-button';
  setBookReadingStatusOnButton(readButton, book);
  readButton.addEventListener('click', () => {
    setBookReadingStatus(book);
    setBookReadingStatusOnButton(readButton, book);
  });

  /** append the content to the book-card */
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookDescription);
  bookCard.appendChild(deleteButton);
  bookCard.appendChild(readButton);

  /** append book-card to view */
  const libraryContainer = document.getElementById('book-cards-container');
  libraryContainer.appendChild(bookCard);

}

function deleteBook(book, bookCard){
  /** find index of the book in the myLibrary index */
  const index = myLibrary.indexOf(book);

  /** remove book from the library */
  if (index > -1){
    myLibrary.splice(index,1);
  }

  /** remove book-card from the DOM */
  bookCard.remove();
}

function setBookReadingStatus(book) {
  if (book.read) {
    book.setUnRead();
  } else {
    book.setRead();
  }
}

function setBookReadingStatusOnButton(readButton, book){
  if (book.read){
    readButton.textContent = 'mark as unread';
  } else {
    readButton.textContent = 'want to read';
  }
}

function showForm(){
  document.getElementById('add-book-form').style.display = 'block';
}

function handleFormSubmit(event){
  event.preventDefault();

  /**Get form values */
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pageNumber').value;

  /** Create book object */
  const newBook = new Book(bookTitle, bookAuthor, bookPages);

  addBookToLibrary(newBook);

  /** Clear and hide the form */
  document.getElementById('add-book-form').reset();
  document.getElementById('add-book-form').style.display = 'none'; 
}

/** Event listener to handle ad book form */
document.getElementById('open-book-form-button').addEventListener('click', showForm);
document.getElementById('add-book-form').addEventListener('submit', handleFormSubmit);





/* Code to execute */
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
  const eragon = new Book("Eragon", "Christopher Paolini", 1000);
  const book2 = new Book("book title", 'auhtor', 500);
  const book3 = new Book('book 2', 'author3', 4009);
  
  displayBook(theHobbit);
  addBookToLibrary(theHobbit);
  addBookToLibrary(eragon);
  addBookToLibrary(book2);
  addBookToLibrary(book3);
