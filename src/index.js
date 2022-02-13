import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgTbRasYiXHTs9ZSNeBvkz6uwA7KOIKZI",
    authDomain: "new-project-b4d6d.firebaseapp.com",
    projectId: "new-project-b4d6d",
    storageBucket: "new-project-b4d6d.appspot.com",
    messagingSenderId: "209989473981",
    appId: "1:209989473981:web:d78e9d7a8238f8c5ca09d4"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));

