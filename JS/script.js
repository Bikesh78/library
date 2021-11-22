function Book(title, author, numberOfPages, readStatus){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readStatus} `;
}
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read yet');
// console.log(theHobbit.info());
let myLibrary = [];
function addBookToLibrary(){
    let title = prompt('Title of the book');
    let author = prompt('Author\'s name');
    let numberOfPages = prompt('Number of pages');
    let readStatus = prompt('Read status');
    myLibrary.push(new Book(title, author,numberOfPages,readStatus));
    console.table(myLibrary);
}
addBookToLibrary();

// function displayBook(myLibrary){
//     for(let x of myLibrary){
//         alert(`${x.title} `)
//     }
// }
// displayBook(myLibrary);