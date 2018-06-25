
/*  =============== Table of contents ============================

    Firebase 
        Initialize firebase
        db stands for database
        var db is assigned to the firebase's database.

    Global Variables
        var dbTrainInfo: it starts off as an empty array so whatever's in the database can be pushed into here.

    Global Functions
        initialValues: clears all the targeted text boxes
        newTableRow: This appends rows to the table based off the global variable, dbTrainInfo
        
    Calls and Events
        1) document.ready
        2) function which captures input on click of the submit button
        3) function to creates firebase event so train info is added to database then pushed out to the array of the variable, dbTrainInfo.

    Pseudocoding
    
    ---------- WIP stuff & other comments -----------------------
        
            train frequency input: 
                This needs limits to only accept numbers in a certain format.
                            
    ============================ Firebase =======================================*/

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7yg5tMoDDqC_NfbUxRNGsovOHZSi2_2w",
    authDomain: "train-e9810.firebaseapp.com",
    databaseURL: "https://train-e9810.firebaseio.com",
    projectId: "train-e9810",
    storageBucket: "train-e9810.appspot.com",
    messagingSenderId: "376706306645"
  };
  
  firebase.initializeApp(config);
  var db = firebase.database();

// ====================== Global Variables ===============================

    var dbTrainInfo= [];

// ====================== Global functions ===============================
 function initialValues () {
    var name  = $('#trainName').val('');
    var destination = $('#destination').val('');
    var firstTrainTime = $('#firstTrainTime').val('');
    var freq = $('#trainFrequency').val('');
}


function newTableRow () {
    // Emptying the train table before making a new row prevents repeating rows from showing up
    $('#trainTable > tbody').empty();

    // Looping through the variable in the array so the info can be appended
     for (i=0; i < dbTrainInfo.length; i++){
         $('#trainTable > tbody').append(
            '<tr>' +
                '<td>' + dbTrainInfo [i].trainName  + '</td>'  +
                '<td>' + dbTrainInfo [i].destination + '</td>' +
                '<td>' + dbTrainInfo [i].trainTime + '</td>' +
                '<td>' + 'placeholder' + '</td>' +
                '<td>' + 'placheolder' + '</td>' +
            '</tr>'
         );
     }
}

// ======================= Calls and Events ==================

$(document).ready(function(){

  // Function to add inputs on click
  $('#addTrain').click(function(event) {
    event.preventDefault();

    // grabs user input
    let name  = $('#trainName').val().trim();
    let destination = $('#destination').val().trim();
    let firstTrainTime = $('#firstTrainTime').val().trim();
    let freq = $('#trainFrequency').val().trim()

    // creates local temporary object to store new input
    var newTrainInfo = {
        trainName: name,
        destination: destination,
        trainTime: firstTrainTime,
    };
        
    // pushes newTrainInfo object into the database 
        db.ref().push(newTrainInfo);
        console.log (newTrainInfo);
    
    // clears the input text boxes
    initialValues();    
  });

  // Function to create firebase event to add train to database
  db.ref().on('child_added', function(childSnapshot, prevChildKey) {
        dbTrainInfo.push(childSnapshot.val());
        newTableRow();
  })  
}); 		

console.log(dbTrainInfo);

/*========================= Psueudocoding ==============================
    Inputs: Name of train, destination, first train, frequency (min)
        grab user input and store as var
        create local object to hold data
        upload the data to the database

    Outputs: Train name, destination, frequency (min), next arrival, minutes away
    Process: firebase
 */