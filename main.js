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









/*

function validation(){

   var user = document.getElementById('fname').value;
   var luser = document.getElementById('lname').value;
   var emails = document.getElementById('email').value;
   var mobileNumber = document.getElementById('phone').value;
   var message = document.getElementById('textar').value;
   
   
   





   if(user == ""){
      document.getElementById('fusername').innerHTML =" ** Please fill first name field";
      return false;
   }
   if((user.length <= 2) || (user.length > 20)) {
      document.getElementById('fusername').innerHTML =" ** Username lenght must be between 2 and 20";
      return false;	
   }
   if(!isNaN(user)){
      document.getElementById('fusername').innerHTML =" ** only characters are allowed";
      return false;
   }



   if(luser == ""){
      document.getElementById('lusername').innerHTML =" ** Please fill the last name field";
      return false;
   }
   if((luser.length <= 2) || (user.length > 20)) {
      document.getElementById('lusername').innerHTML =" ** Username lenght must be between 2 and 20";
      return false;	
   }
   if(!isNaN(luser)){
      document.getElementById('lusername').innerHTML =" ** only characters are allowed";
      return false;
   }


   if(emails == ""){
      document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
      return false;
   }
   if(emails.indexOf('@') <= 0 ){
      document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
      return false;
   }

   if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
      document.getElementById('emailids').innerHTML =" ** . Invalid Position";
      return false;
   }





   if(mobileNumber == ""){
      document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
      return false;
   }
   if(isNaN(mobileNumber)){
      document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
      return false;
   }
   if(mobileNumber.length!=10){
      document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
      return false;
   }



  



   if(message == ""){
      document.getElementById('messagesid').innerHTML =" ** Please fill the message field";
      return false;
   }
   if((message.length <= 2) || (message.length > 2220)) {
      document.getElementById('messagesid').innerHTML =" ** message lenght must be between 2 and 2220";
      return false;	
   }
   if(!isNaN(message)){
      document.getElementById('messagesid').innerHTML =" ** only characters are allowed";
      return false;
   }


   
   window.alert('thank you for contacting me!');
    
} 

 */  

    
    
    
    
   
    
 
 
    
 //Extract Element from form
  // Listen for form submit
  document.getElementById('idForm').addEventListener('submit',submitForm);
 
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // get input
    
    var name = getInput('fname');
    var laname = getInput('lname');
    var email = getInput('email');
    var phone = getInput('phone');
    var message = getInput('textar');
    
    if(name ==="" || laname ==="" || email ==="" || phone ==="" || message ===""){

      if(name == ""){
         document.getElementById('fusername').innerHTML =" ** Please fill first name field";
         return false;
      }
      if((name.length <= 2) || (name.length > 20)) {
         document.getElementById('fusername').innerHTML =" ** Username lenght must be between 2 and 20";
         return false;	
      }
      if(!isNaN(name)){
         document.getElementById('fusername').innerHTML =" ** only characters are allowed";
         return false;
      }
   
   
   
      if(laname == ""){
         document.getElementById('lusername').innerHTML =" ** Please fill the last name field";
         return false;
      }
      if((laname.length <= 2) || (laname.length > 20)) {
         document.getElementById('lusername').innerHTML =" ** Username lenght must be between 2 and 20";
         return false;	
      }
      if(!isNaN(laname)){
         document.getElementById('lusername').innerHTML =" ** only characters are allowed";
         return false;
      }
   
   
      if(email == ""){
         document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
         return false;
      }
      if(email.indexOf('@') <= 0 ){
         document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
         return false;
      }
   
      if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
         document.getElementById('emailids').innerHTML =" ** . Invalid Position";
         return false;
      }
   
   
   
   
   
      if(phone == ""){
         document.getElementById('mobileno').innerHTML =" ** Please fill the mobile number field";
         return false;
      }
      if(isNaN(phone)){
         document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
         return false;
      }
      if(phone.length!=10){
         document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
         return false;
      }
   
   
   
     
   
   
   
      if(message == ""){
         document.getElementById('messagesid').innerHTML =" ** Please fill the message field";
         return false;
      }
      if((message.length <= 2) || (message.length > 2220)) {
         document.getElementById('messagesid').innerHTML =" ** message lenght must be between 2 and 2220";
         return false;	
      }
      if(!isNaN(message)){
         document.getElementById('messagesid').innerHTML =" ** only characters are allowed";
         return false;
      }
   
      
 }
 else{

 fireData(name,laname,email,phone,message);
    console.log(name);
    window.alert('thank you for contacting me!');
   }  
  
  // Function to get form values
  function getInput(id){
     return document.getElementById(id).value;
   }
  //end of extraction of form element
 

 function fireData(a,b,c,d,e){
 db.collection("contact").add({
    
    firstName: a,
    lastName :b,
    email:c,
    phoneNumber:d,
    message:e
 })
 .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
 })
 .catch(function(error) {
    console.error("Error adding document: ", error);
 });
}

}