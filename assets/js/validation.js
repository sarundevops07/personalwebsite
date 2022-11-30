var nameError=document.getElementById('name-error')
var emailError=document.getElementById('email-error')
var subjectError=document.getElementById('subject-error')
var messageError=document.getElementById('message-error')
var submitError=document.getElementById('submit-error')

function validateName()
{
    var naam=document.getElementById('name').value;
    if(naam.length==0)
    {
        nameError.innerHTML='name is required';
        return false;
    }
    if(!naam.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name'
        return false
    }
        nameError.innerHTML='<i class="bi bi-check-circle-fill">'
        return true;
}
    function validateMail(){
    var mail=document.getElementById('email').value

    if(mail.length==0){
        emailError.innerHTML='please enter email'
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='invalid email';
    return false;
    }
    
    
    emailError.innerHTML='<i class="bi bi-check-circle-fill">'
      return true;
}
function validateSubject(){

var sub=document.getElementById('subject').value
var max=10;
var left=sub.length
if(left>max){
    subjectError.innerHTML='limit exeed'
    return false;
}
subjectError.innerHTML='<i class="bi bi-check-circle-fill">'
return true;
}
function validateMessage(){

    var text=document.getElementById('message').value
    if(text==0){
        messageError.innerHTML='say something !'
        return false
    }
messageError.innerHTML='<i class="bi bi-check-circle-fill">'
return true
}
function validateForm(){
    
if(!validateName() || !validateMail() || !validateSubject() || !validateMessage() ){
submitError.style.display='block';
submitError.innerHTML='please fill all the fields'
setTimeout(function(){submitError.style.display='none';},3000)
return false

}

}

