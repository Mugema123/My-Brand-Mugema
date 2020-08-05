function validateForm() {
    
   var fname= document.myForm.firstName;
   var lname= document.myForm.lastName;
   var mail= document.myForm.email;
   var phone= document.myForm.phoneNumber;
   var text= document.myForm.textarea;
   
   if(allLetter(fname))
   {
    
   if(allLett(lname))
   {
   
   if(ValidateEmail(mail))
   {
   if(allnumeric(phone))
   {
   
   if(message(text))
   {
   
    
   }
   }
   }
   }
   }

   //document.getElementById("form").setAttribute("action","thank.html");

   //window.location.href = "thank.html"
   //alert('thank you for contacting me!')
return false;
   }
   
   
   //JavaScript code for validating firstname
   
   function allLetter(fname)
   { 
   var letters = /^[A-Za-z]+$/;
   if(fname.value.match(letters))
   {
   return true;
   }
   else
   {
   alert('First name  must be filled out and have alphabet characters only');
   fname.focus();
   return false;
   }
   }
   
   //JavaScript code for validating lastname
   
   function allLett(lname)
   { 
   var let = /^[A-Za-z]+$/;
   if(lname.value.match(let))
   {
   return true;
   }
   else
   {
   alert('last name  must be filled out and have alphabet characters only');
   lname.focus();
   return false;
   }
   }
   
   //JavaScript code for validating email format
   function ValidateEmail(mail)
   {
   var mailformat = /[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+/g;
   if(mail.value.match(mailformat))
   {
   return true;
   }
   else
   {
   alert("You have entered an invalid email address! (example@gmail.com)");
   mail.focus();
   return false;
   }
   }
   
   //JavaScript code for validating phone number
   function allnumeric(phone)
   { 
   var numbers = /^[0-9]+$/;
   if(phone.value.match(numbers))
   {
   return true;
   }
   else
   {
   alert('phone number must be filled out and have numeric characters only');
   phone.focus();
   return false;
   }
   }
   
   //JavaScript code for validating textarea
   
   function message(text)
   { 
   var area = /^[A-Za-z]+$/;
   if(text.value.match(area))
   {
   return true;
   }
   else
   {
   alert('textarea  must be filled out and have alphabet and numeric characters only');
   text.focus();
   return false;
   }
   }

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
   
   var name = getInput('fname');
   var laname = getInput('lname');
   var email = getInput('email');
   var phone = getInput('phone');
   var message = getInput('textar');

   console.log(message);
 }
     
 
 // Function to get form values
 function getInput(id){
    return document.getElementById(id).value;
  }
 //end of extraction of form element

//------Send form elements to firestore-----
//get data
let nam1, nam2, mail,phon,text;


   nam1 = document.getElementById('fname').value;
   nam2 = document.getElementById('lname').value;
   mail = document.getElementById('email').value;
   phon = document.getElementById('phone').value;
   text = document.getElementById('textar').value;


//------put data into database---
// document.getElementById('insert').onclick = function(){
 //  writeData();
//   db.collection('contact').set({
 //     firstName: nam1,
 //     lastName :nam2,
 //     email:mail,
 //     phoneNumber:phon,
 //     message:text
//   })
//} 
//-----get-----

db.collection("contact").add({
   firstName: nam1,
   lastName :nam2,
   email:mail,
   phoneNumber:phon,
   message:text
})
.then(function(docRef) {
   console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
   console.error("Error adding document: ", error);
});
