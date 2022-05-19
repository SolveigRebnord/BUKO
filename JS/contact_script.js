console.log("heia, dette er nå js for contact");


const burgerMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function() {
    if (overlay.style.display === "none") {
        overlay.style.display = "inline-block";
    } else {
      overlay.style.display = "none";
    }
});


//Form validation

const form = document.getElementById("form");



const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.querySelector(".subject > input"); // dette er feiiil
const textInput = document.getElementById("textarea")

const nameTheInput = document.querySelector("input#name")


validateForm = (e) => {
    e.preventDefault ();


    const nameOK = document.querySelector(".nameOK") // hvorfor må denne stå inni funksjonen, men ikke de over?
    const nameBAD = document.querySelector(".nameBAD")

    let nameAfterInput = nameInput.value.trim();
    let nameLength = nameAfterInput.length;

    if (nameAfterInput != "") {
        nameAfterInput = true;
        console.log("superb, its not empty");

        if (nameLength > 5) {
            console.log("Name approved");
            nameInput.style.color = "green";
            nameTheInput.style.border = "solid green 2px";            
            nameOK.innerHTML = "Pretty!";
            nameOK.style.color = "green";

        }

    else {
            nameInput.style.color = "red"
            nameTheInput.style.border = "solid red 2px";            
            nameBAD.innerHTML = "At least 5 caracthers!";
            nameBAD.style.color = "red";
            console.log("Error: Not enough caracthers")
        }   

    }
    
    else {
        nameBAD.innerHTML = "We need something..";
        console.log("Error: No content")
    }







    const emailOK = document.querySelector(".emailOK")
    const emailBAD = document.querySelector(".emailBAD")
    const emailTheInput = document.querySelector("input#email")


    let emailAfterInput = emailInput.value.trim();
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ //ressurs på nett, finne?

    if (emailAfterInput != "") {
        nameAfterInput = true;
        console.log("superb, its not empty");


    if (emailPattern.test(emailAfterInput)) {
        emailAfterInput = true;
        console.log("Email approved");
        emailInput.style.color = "green";
        emailTheInput.style.border = "solid green 2px";            
        emailOK.innerHTML = "Neat! *Sends spam*";        
        emailOK.style.color = "green";
    }

    else {
        emailAfterInput = false;
        emailBAD.innerHTML = "I don't think that's correct"
        console.log("Error: Not valid email")
        emailInput.style.color = "red"
        emailTheInput.style.border = "solid red 2px";            
        emailBAD.style.color = "red";
    }

}

else {
    emailAfterInput = false;
    emailBAD.innerHTML = "We need something..";
    console.log("Error: No content")
}
    


const subjectOK = document.querySelector(".subjectOK")
const subjectBAD = document.querySelector(".subjectBAD")
const subjectTheInput = document.querySelector("input[name=subject]");




let subjectAfterInput = subjectInput.value.trim();
    let subjectLength = subjectAfterInput.length;

    if (subjectAfterInput != "") {
        subjectAfterInput = true;
        console.log("superb, its not empty");

        if (subjectLength > 15) {
            subjectAfterInput = true;
            console.log("Subject approved");
            subjectInput.style.color = "green";
            subjectTheInput.style.border = "solid green 2px";            
            subjectOK.innerHTML = "Nice!";        
            subjectOK.style.color = "green";
        }

    else {
            subjectInput.style.color = "red" 
            subjectBAD.innerHTML = "At least 15 caracthers!";
            subjectBAD.style.color="red";
            console.log("Error: Not enough caracthers");
            subjectAfterInput = false;
            subjectTheInput.style.border = "solid red 2px";            
        
        }   

    }
    
    else {
        subjectBAD.innerHTML = "We need something..";
        console.log("Error: No content")
    }



const textOK = document.querySelector(".textOK")
const textBAD = document.querySelector(".textBAD")
const textTheInput = document.getElementById("textarea");



let textAfterInput = textInput.value.trim();
    let textLength = textAfterInput.length;

    if (textAfterInput != "") {
        textAfterInput = true;
        console.log("superb, its not empty");

        if (textLength > 25) {
            textAfterInput = true;
            console.log("Text approved");
            textInput.style.color = "green";
            textOK.innerHTML = "Amazeballs";
            textTheInput.style.border = "solid green 2px";                
            textOK.style.color = "green";
        }

    else {
            textAfterInput = false;
            textInput.style.color = "red"
            textBAD.innerHTML = "At least 25 caracthers!";
            console.log("Error: Not enough caracthers")
            textBAD.style.color="red";
            textTheInput.style.border = "solid red 2px";    
        }   

    }
    
    else {
        textBAD.innerHTML = "We need something..";
        console.log("Error: No content")
    }






}



form.addEventListener("submit", validateForm);