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
    let title = document.getElementsByName('title')[0].value;
    let author = document.getElementsByName('author')[0].value;
    let numberOfPages =document.getElementsByName('page-number')[0].value;
    let readStatus = getRadioInputValue(document.getElementsByName('read-status'));
    console.log(readStatus);
    myLibrary.push(new Book(title, author,numberOfPages,readStatus));
    console.table(myLibrary);
}
addBookToLibrary();
function getRadioInputValue(options){
    for(let key of options){
        if(key.checked === true) return key.value;
    }
}
// function displayBook(myLibrary){
//     for(let x of myLibrary){
//         alert(`${x.title} `)
//     }
// }
// displayBook(myLibrary);
