"use strict";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".form-input");
const messageTextarea = document.querySelector(".form-comment");
const feedback = {};
form.addEventListener("input",(event) =>{
    
    if (event.target.nodeName === "INPUT"){
        const email = event.target.value;
        feedback.email = email.trim();
    }
    if (event.target.nodeName === "TEXTAREA"){
        const message = event.target.value;
        feedback.message = message.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
    console.log(localStorage);

})


document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(storedData);
    if (storedData) {
        const parsedData = JSON.parse(storedData);

        if (parsedData.email) {
            if (emailInput) {
                emailInput.value = parsedData.email;
            }
        }

        if (parsedData.message) {
            if (messageTextarea) {
                messageTextarea.value = parsedData.message;
            }
        }
    }
});

form.addEventListener("submit",(event) => {
    event.preventDefault();
    if(messageTextarea.value != "" && emailInput.value != ""){
        messageTextarea.value = "";
        emailInput.value = "";
        console.log(feedback);
        console.log(localStorage);
        localStorage.clear();
        location.reload();
    }
    else{
        alert("fill all forms!");
    }
    
    
   
});