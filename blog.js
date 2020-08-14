
    //connecting to firestore database
 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCSowyLOaWbzEkrDpqfxOsltEmj6PD7uNU",
   authDomain: "personal-web-cbe9c.firebaseapp.com",
   databaseURL: "https://personal-web-cbe9c.firebaseio.com",
   projectId: "personal-web-cbe9c",
   storageBucket: "personal-web-cbe9c.appspot.com",
   messagingSenderId: "822165723878",
   appId: "1:822165723878:web:49d84b415625d58847f927",
   measurementId: "G-YW30PXMQS4"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 
 // Reference messages collection
 let db = firebase.firestore();
 
 
 
 console.log(db)
 
    
 //Extract Element from form
  // Listen for form submit
  document.getElementById('idForm').addEventListener('submit', submitForm);
 
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // get input
    
    var titles = getInput('heading');
    var times = getInput('date');
    var message = getInput('text');
    
 fireData(titles,times,message);
    console.log(message);
  }
      
  
  // Function to get form values
  function getInput(id){
     return document.getElementById(id).value;
   }
  //end of extraction of form element
 
 //------Send form elements to firestore-----
 //get data
 

 //-----get-----
 function fireData(a,b,c){
 db.collection("article").add({
    
    blog: a,
    header :b,
    date:c,
    
 })
 .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
 })
 .catch(function(error) {
    console.error("Error adding document: ", error);
 });
}