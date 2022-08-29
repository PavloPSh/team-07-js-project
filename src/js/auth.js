// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBxK5_h_ujvAsW-jGS7sZP1o86rN6KTw8k",
  authDomain: "filmoteca-07-2022.firebaseapp.com",
  projectId: "filmoteca-07-2022",
  storageBucket: "filmoteca-07-2022.appspot.com",
  messagingSenderId: "628934586572",
  appId: "1:628934586572:web:0e49d0218d443fe2319269",
  measurementId: "G-21XLJKH2KG"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// console.log(app);

const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// detect state

onAuthStateChanged(auth, user => {
    if (user != null) {
        // console.log('logged in');
    } else {
        // console.log('');
    }

})



function fetchMoviesByIdToken(token) {
    // console.log(token);
    if (!token) {
        console.log('no authorize');
        // return Promise.resolve('<p> No token</p>')

    }
    return fetch(`https://filmoteca-07-2022-default-rtdb.firebaseio.com/movies.json?auth=${token}`)
        .then(response => response.json())
        .then(movies => { 
            console.log("movies", movies);
        })
    .then(console.log("Authorized Welcome"))
}


function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyBxK5_h_ujvAsW-jGS7sZP1o86rN6KTw8k';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password, returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => data.idToken)
    
}


function authFormHandler(e) {
    e.preventDefault();
    const email = e.target.querySelector('#email').value;
    const password = e.target.querySelector('#password').value;
    console.log(email, password);

    authWithEmailAndPassword(email, password)
        .then(token => { 
            return fetchMoviesByIdToken(token)
        })
    
   
    // .then(renderModalAfterAuth)
}

// function renderModalAfterAuth(content) {
    
// }

const login_form = document.getElementById('login_form');
login_form.addEventListener('submit', authFormHandler);




function createUserWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyBxK5_h_ujvAsW-jGS7sZP1o86rN6KTw8k';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password, returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}


function regFormHandler(e) {
    e.preventDefault();
    const email = e.target.querySelector('#reg_email').value;
    const password = e.target.querySelector('#reg_password').value;
    // const name = e.target.querySelector('#reg_name').value;

    console.log(email, password);
    createUserWithEmailAndPassword(email, password)
        // .then(token => { 
            
        // })
}

const register_form = document.getElementById('register_form');
// console.log(login_form);
register_form.addEventListener('submit', regFormHandler);







function addInfoToDB(test_string) {
    return fetch('https://filmoteca-07-2022-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(test_string),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => { 
            test_string.id = response.name
            return test_string
        })
        .then(addToLocalStorage)
    // .then(render)
}

function addToLocalStorage(test_string) {
    const all = getMoviesFromLocalStorage();
    all.push(test_string);
    localStorage.setItem('movies', JSON.stringify(all))
}
function getMoviesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('movies') || '[]')
}


function testFormHandler(e) {
    e.preventDefault();
    const inputVal = e.target.querySelector('#test_input').value;
    
    const textDate = {
        text: inputVal,
        date: new Date().toJSON()
    }
    console.log(textDate);

    // sbm_btn.disabled = true
    addInfoToDB(textDate).then(() => {
        inputVal.value = ''
        // sbm_btn.disabled = false

    })

}

const test_form = document.getElementById('test_form');
// const sbm_btn = document.getElementById('submit_test');
test_form.addEventListener('submit', testFormHandler);










