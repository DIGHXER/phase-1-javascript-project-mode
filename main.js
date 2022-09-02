// THIS IS THE READ NORE BUTTON ON THE 2ND WEB PAGE
const readMoreBttn = document.querySelector('.read-more-bttn')
const text = document.querySelector('.textt')

readMoreBttn.addEventListener('click',(e)=>){
    text.classList.toggle('show more')
    if(readMoreBttn.innerText === 'Read More'){
        readMoreBttn.innerText = 'Read Less';
    }else{
        readMoreBttn.innerText = 'Read More';
    }
    }


// const form = document.querySelector('.sign-up-form');
// const signUp = document.querySelector('.sign-up');
// const signIn = document.querySelector('#sign-in');
// const emailPassword = document.querySelector('.input-box');

// form.addEventListener('submit', (event) =>{
//     event.preventDefault();

//     validateForm();
    
// });

// function validateForm(){
//     if(emailInput.value.trim()=='')
//     setError(emailInput. 'Username cannot be empty')
// }



