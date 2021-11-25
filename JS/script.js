function Book(title, author, numberOfPages, readStatus){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}
// Book.prototype.info = function(){
//     return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readStatus} `;
// }
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read yet');
// console.log(theHobbit.info());
function returnLastItem(array){ //returs last element of an array
    return array[array.length - 1];
}
let cardCounter = 1;
Book.prototype.display = function(){
    cardId = 'card'+ cardCounter;
    createCard(cardId,this.readStatus);
    cardCounter++;
    let bookTitle = document.createElement('p');
    bookTitle.textContent = this.title;
    bookTitle.setAttribute('class', 'bookTitle');
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = this.author;
    bookAuthor.setAttribute('class','bookAuthor');
    let bookNumberOfPages = document.createElement('p');
    bookNumberOfPages.textContent = this.numberOfPages;
    bookNumberOfPages.setAttribute('class','bookNumberOfPages');
    // showReadStatus(this.readStatus);
    appendToParent(`#${cardId}`, bookTitle,bookAuthor,bookNumberOfPages);
}
function appendToParent(parentNode,node1, node2, node3){
    document.querySelector(`${parentNode}`).appendChild(node1);
    document.querySelector(`${parentNode}`).appendChild(node2);
    document.querySelector(`${parentNode}`).appendChild(node3);
}

let myLibrary = [];
function addBookToLibrary(){
    let title = document.getElementsByName('title')[0].value;
    let author = document.getElementsByName('author')[0].value;
    let numberOfPages =document.getElementsByName('page-number')[0].value;
    let readStatus = getRadioInputValue(document.getElementsByName('read-status'));
    myLibrary.push(new Book(title,author,numberOfPages,readStatus));
    console.table(myLibrary);
    
}


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
// const submitBtn = document.querySelector('.submit');
// submitBtn.setAttribute('type','button');
document.querySelector('#myForm').addEventListener('submit',(e) => {
    e.preventDefault();
    addBookToLibrary();
    clearInputField();
    popUpForm.style.display= 'none';
    returnLastItem(myLibrary).display();
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

function createCard(idName,readStatus){
    let card = document.createElement('div');
    card.setAttribute('id',`${idName}`);
    card.setAttribute('class','card');
    document.querySelector('.container').appendChild(card);
    let readBtn = document.createElement('button');
    readBtn.setAttribute('class','readBtn');
    showReadStatus(readStatus,readBtn);
    document.querySelector(`#${idName}`).appendChild(readBtn);

    const readButton = card.childNodes;
    changeReadStatus(readButton);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','deleteBtn');
    deleteBtn.textContent = 'Delete';
    document.querySelector(`#${idName}`).appendChild(deleteBtn);
}
function showReadStatus(readStatus,readBtn){
    if(readStatus === 'yes'){
        readBtn.style.backgroundColor = 'green';
        readBtn.textContent = 'Completed';
    }else if(readStatus === 'no'){
        readBtn.style.backgroundColor = 'red';
        readBtn.textContent = 'Not Completed';
    }
}
function changeReadStatus(readButton){
    readButton.forEach(readButton =>{
        readButton.addEventListener('click',(e) =>{
            if(e.target.textContent === 'Completed'){
                e.target.textContent = 'Not Completed';
                e.target.style.backgroundColor = 'red';
            }else if(e.target.textContent === 'Not Completed'){
                e.target.textContent = 'Completed';
                e.target.style.backgroundColor = 'green';
            }
        });
    }); 
}