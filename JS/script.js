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
    myLibrary.push(new Book(title,author,numberOfPages,readStatus));
    console.table(myLibrary);
}
// addBookToLibrary();

function getRadioInputValue(options){
    for(let key of options){
        if(key.checked === true) return key.value;
    }
}
const popUpForm = document.querySelector('.form-popup');
const cancelBtn = document.querySelector('.cancel');
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click',(e) => {
    popUpForm.style.display = 'block';
    clearInputField();
});
cancelBtn.addEventListener('click',() => popUpForm.style.display ='none');
const submitBtn = document.querySelector('.submit');
// submitBtn.setAttribute('type','button');
document.querySelector('#myForm').addEventListener('submit',(e) => {
    e.preventDefault();
    addBookToLibrary();
    clearInputField();
    popUpForm.style.display= 'none';
});
function clearInputField(){
    document.getElementsByName('title')[0].value = '';
    document.getElementsByName('author')[0].value = '';
    document.getElementsByName('page-number')[0].value = '';   
    let radioReadStatus = document.querySelectorAll("input[name='read-status']");
    for(let x of radioReadStatus){
        x.checked = false;
    }
}
// function checkForEmptyField(){
//     if()
// }

// function displayBook(myLibrary){
//     for(let x of myLibrary){
//         alert(`${x.title} `)
//     }
// }
// displayBook(myLibrary);
