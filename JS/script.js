function Book(title, author, numberOfPages, readStatus){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}

function returnLastItem(array){ //returs last element of an array
    return array[array.length - 1];
}

let myLibrary = [];
let cardCounter = 1;
Book.prototype.display = function(){
    cardId = 'card'+ cardCounter;
    this.cardId = cardId; //added cardId property to retrieve index of the array
    createCard(cardId,this.readStatus); //creates card with unique id to show book information
    cardCounter++
    let bookTitle = document.createElement('p');
    bookTitle.textContent = this.title;
    bookTitle.setAttribute('class', 'bookTitle');
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${this.author}`;
    bookAuthor.setAttribute('class','bookAuthor');
    let bookNumberOfPages = document.createElement('p');
    bookNumberOfPages.textContent = `Page Count: ${this.numberOfPages}`;
    bookNumberOfPages.setAttribute('class','bookNumberOfPages');
    appendToParent(`#${cardId}`, bookTitle,bookAuthor,bookNumberOfPages);
}

function appendToParent(parentNode,node1, node2, node3){
    document.querySelector(`${parentNode}`).appendChild(node1);
    document.querySelector(`${parentNode}`).appendChild(node2);
    document.querySelector(`${parentNode}`).appendChild(node3);
}


function addBookToLibrary(){
    let title = document.getElementsByName('title')[0].value;
    let author = document.getElementsByName('author')[0].value;
    let numberOfPages =document.getElementsByName('page-number')[0].value;
    let readStatus = getRadioInputValue(document.getElementsByName('read-status'));
    myLibrary.push(new Book(title,author,numberOfPages,readStatus));
    returnLastItem(myLibrary).display();
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
    popUpForm.style.display = 'block'; //makes pop up form visible
    clearInputField();
});
cancelBtn.addEventListener('click',() => popUpForm.style.display ='none');

document.querySelector('#myForm').addEventListener('submit',(e) => {
    e.preventDefault(); //prevents page from refreshing
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

function createCard(idName,readStatus){
    let card = document.createElement('div');
    card.setAttribute('id',`${idName}`);
    card.setAttribute('class','card');
    document.querySelector('.container').appendChild(card);
    let readBtn = document.createElement('button');
    readBtn.setAttribute('class','readBtn');
    showReadStatus(readStatus,readBtn);
    document.querySelector(`#${idName}`).appendChild(readBtn);

    const readButton = card.childNodes; //Creates live nodelist that updates itself when new DOM is added
    changeReadStatus(readButton);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','deleteBtn');
    deleteBtn.textContent = 'Delete';
    document.querySelector(`#${idName}`).appendChild(deleteBtn);

    deleteCard(deleteBtn);
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
            
            let parentCard = readButton.parentNode;
            let parentCardId = parentCard.getAttribute('id');
            libraryCardIdIndex = myLibrary.findIndex(cardIndex => (cardIndex.cardId === parentCardId));
            
            if(myLibrary[libraryCardIdIndex].readStatus === 'no'){
                myLibrary[libraryCardIdIndex].readStatus = 'yes';
                showReadStatus('yes',readButton);
            }else if(myLibrary[libraryCardIdIndex].readStatus === 'yes'){
                myLibrary[libraryCardIdIndex].readStatus = 'no';
                showReadStatus('no',readButton);
            }
        });
    }); 
}

function deleteCard(deleteBtn){
    deleteBtn.addEventListener('click',(e)=> {
            parentCard = deleteBtn.parentNode; 
            let parentCardId = parentCard.getAttribute('id');
            const libraryCardIdIndex = myLibrary.findIndex(cardIndex => (cardIndex.cardId === parentCardId)); //gets index of book in myLibrary
            myLibrary.splice(libraryCardIdIndex,1); // Deletes book from myLibrary array
            document.querySelector('.container').removeChild(parentCard);
    });
}