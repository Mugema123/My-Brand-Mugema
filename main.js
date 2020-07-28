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
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
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
    alert('textarea  must be filled out and have alphabet characters only');
    text.focus();
    return false;
    }
    }