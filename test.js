document.getElementById('Cform').addEventListener('submit', submitForm);
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // get input
    var Name = getInput('cname');
    var Email = getInput('cemail');
    var Message = getInput('cmsg');
    if(Name==="" || Email==="" || Message===""){
      if(Name===""){
       x="Enter your name";
        }
      else{x="";}
      if( Email===""){
        y="enter valid email"
      }
      else{y="";}
      if(Message===""){
       z="Try to type anything";
       }
      else{z="";}
      alert(x+"\n"+y+"\n"+z);
 }
 else{
    ContactData(Name,Email,Message);
    console.log(Name+"  is inserted");
  }
  // Function to get form values
  function getInput(id){
     return document.getElementById(id).value;
   }
  //end of extraction of form element
 //-----get-----
 function ContactData(a,c,e){
  var docRef = db.collection("contacts")
      docRef.add({
         NAME: a,
         EMAIL:c,
         MESSAGE:e
 })
 .then(function(docRef) {
     //var x=  "contacts/" + docRef.id;
   
    console.log("Document written with ID: ", docRef;
   // var eye = db.collection("contacts").doc(docRef.id);
    //console.log("Document data: ",x);
    //setTimeout(function(){window.location.replace('thankyou.html'); }, 10000);
 })
 .catch(function(error) {
    console.error("Error adding document: ", error);
 });
}
}