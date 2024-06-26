let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {        //&& not false(null,undefiened, nan, 0, """)
        const book = {                               //isNaN(pagesNumber) vérifie si une valeur n’est PAS un nombre. ! l'inverse
            name: bookName,        
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
    
}



function showbooks() {
const booksDiv = books.map((book, index) =>
    `<h1>book Number: ${index + 1}</h1>
    <P><strong>Book Name: </strong>${book.name}</P>
    <p><strong>Author Name:</strong> ${book.authorName} </p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p> 
    <button onclick="deleteBook(${index})">Delete Book</button>   `)
    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deleteBook(index) {
    // Check if index is valid
    if (index >= 0 && index < books.length) {
        // Remove the book at the specified index
        books.splice(index, 1);
        
        // Refresh the displayed book list
        showbooks();
    } else {
        alert('Invalid book ID.');
    }
}
