import * as firebase from 'firebase'
import { useHistory } from 'react-router'
import { toast } from '../toast'

const config = {
    apiKey: "AIzaSyAVRJSrAAP6-S8NCqwYG75oCNGZQ-KUvdg",
    authDomain: "ionic-firawz.firebaseapp.com",
    databaseURL: "https://ionic-firawz.firebaseio.com",
    projectId: "ionic-firawz",
    storageBucket: "ionic-firawz.appspot.com",
    messagingSenderId: "239054056610",
    appId: "1:239054056610:web:cc0f7ee67de92a84fd7bfb",
    measurementId: "G-L5T8CREEDK"
}

firebase.initializeApp(config)

export function getCurrentUser(){
    return new Promise((resolve,reject)=>{
        const userLogedIn = firebase.auth().onAuthStateChanged(function(user){
            if(user){
                resolve(user)
            }else{
                resolve(null)
            }
            userLogedIn()
        })

    })
}

export async function loginUser(email: string, password: string) {

    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email,password)
    
        console.log(result)
        return result
    } catch (err) {
        console.log(err)
        return false
    }
}

export async function registerUser(email: string, password: string) {

    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(result)
        return true
    } catch (err) {
        console.log(err)
        if(err.message === "The email address is badly formatted."){
            toast("Invalid email format", 4000)
        }else{
            toast(err.message)
        }
        return false
    }
}

export function logoutUser(){
    return firebase.auth().signOut()
}