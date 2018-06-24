$(document).ready(function(){
   
/*  =============== Table of contents ============================
    
Psueudocoding
    Inputs: Name of train, destination, first train, frequency (min)
        grab user input and store as var
        create local object to hold data
        upload the data to the database

    Outputs: Train name, destination, frequency (min), next arrival, minutes away
    Process: firebase

Abbreviations
    db= database

============================ Firebase =======================================*/
/*
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC7yg5tMoDDqC_NfbUxRNGsovOHZSi2_2w",
    authDomain: "train-e9810.firebaseapp.com",
    databaseURL: "https://train-e9810.firebaseio.com",
    projectId: "train-e9810",
    storageBucket: "",
    messagingSenderId: "376706306645"
  };
  firebase.initializeApp(config);

  var db = firebase.database;
*/
  // Function to add inputs on click
  $('#addTrain').click(function(event) {
    event.preventDefault();

    // grabs user input
    var name  = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrainTime').val().trim();
    var freq = $('#trainFrequency').val().trim()

    // making temporary object to store input
    var trainTemp = {
        trainName: name,
        destination: destination,
        trainTime: firstTrainTime,
    };

    console.log (trainTemp);

    var trainInfo = [];
    

  })






}); 		