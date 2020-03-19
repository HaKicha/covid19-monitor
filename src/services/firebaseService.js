import firebase from 'firebase/app';
import 'firebase/firestore';

export class FirebaseService {

    app;
    db;

    constructor() {
        this.app = firebase.initializeApp({
                "apiKey": "AIzaSyBz-IvkWtKPco1CFmhBlgMUzVqlIGw9HMA",
                "authDomain": "korona-oborona.firebaseapp.com",
                "databaseURL": "https://korona-oborona.firebaseio.com",
                "projectId": "korona-oborona",
                "storageBucket": "korona-oborona.appspot.com",
                "messagingSenderId": "5640606910",
                "appId": "1:5640606910:web:87d19e8f9486a32d45baef",
                "measurementId": "G-L83NX3QZKM"
            }
        );
        this.db = firebase.firestore();
    }

    async getPosts() {
        const snapshot = await this.db.collection('posts').get();
        const res = [];
        snapshot.forEach(doc => res.push(doc.data()));
        return res;
    }


    async getLikes(postId) {
        console.log(postId);
        const doc = await this.db.collection('likes').doc(postId).get();
        console.log(doc.data());
        return doc.data();
    }



}

