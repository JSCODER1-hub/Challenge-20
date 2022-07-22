let form = document.querySelector(".container form");
let inputField = document.querySelectorAll("form input")[0];
let submit = document.querySelectorAll("form input")[1];
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let error = document.querySelector(".error");



form.onsubmit = function(e){
    e.preventDefault();
    if(inputField.value == " ")
    {
        return false;
    }else{
        if (!inputField.value.match(regex)){
            error.innerHTML = "Please provide a valid email address";
        }else{
            form.submit();
        }
    }
}