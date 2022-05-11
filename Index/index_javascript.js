console.log("heia, dette er nå js for index og contact");

/*
fetch ("https://www.sunroad.no/exam/wp-json/wp/v2/media")
.then(response => response.json())
.then(data => {
    console.log(data);
    media = data;
})
.catch((error) => {
    console.error('Error:', error);
  });
*/
/*
const scrollDownChevron = document.getElementById("scrollDown");
const toDiv = document.querySelector(".toDiv");

scrollDownChevron.addEventListener("click", () => toDiv.scrollIntoView({behavior: "smooth"}));
*/

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
            console.log("PERFECTO");
            nameInput.style.color = "green";
            nameOK.innerHTML = "Pretty!";
        }

    else {
            nameInput.style.color = "red" // nameOK og BAD funker ikke på fargene. Kan se på dette senere. Fanger fargen fra ene..
            nameBAD.innerHTML = "At least 5 caracthers!";
            console.log("Error: Not enough caracthers")
        }   

    }
    
    else {
        nameBAD.innerHTML = "We need something, mmkey";
        console.log("Error: No content")
    }







    const emailOK = document.querySelector(".emailOK")
    const emailBAD = document.querySelector(".emailBAD")

    let emailAfterInput = emailInput.value.trim();
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ //ressurs på nett, finne?

    if (emailAfterInput != "") {
        nameAfterInput = true;
        console.log("superb, its not empty");


    if (emailPattern.test(emailAfterInput)) {
        emailOK.innerHTML = "Neat! *Sends spam*";
        emailAfterInput = true;
        console.log("JOY");

    }

    else {
        emailAfterInput = false;
        emailBAD.innerHTML = "I don't think that's correct"
        console.log("Error: Not valid email")
    }

}

else {
    emailAfterInput = false;
    emailBAD.innerHTML = "We need something, mmkey";
    console.log("Error: No content")
}
    


const subjectOK = document.querySelector(".subjectOK")
const subjectBAD = document.querySelector(".subjectBAD")


let subjectAfterInput = subjectInput.value.trim();
    let subjectLength = subjectAfterInput.length;

    if (subjectAfterInput != "") {
        subjectAfterInput = true;
        console.log("superb, its not empty");

        if (subjectLength > 15) {
            console.log("WIHO");
            subjectInput.style.color = "green";
            subjectOK.innerHTML = "Pretty!";
        }

    else {
            subjectInput.style.color = "red" // nameOK og BAD funker ikke på fargene. Kan se på dette senere. Fanger fargen fra ene..
            subjectBAD.innerHTML = "At least 15 caracthers!";
            console.log("Error: Not enough caracthers")
        }   

    }
    
    else {
        subjectBAD.innerHTML = "We need something, mmkey";
        console.log("Error: No content")
    }



const textOK = document.querySelector(".textOK")
const textBAD = document.querySelector(".textBAD")


let textAfterInput = textInput.value.trim();
    let textLength = textAfterInput.length;

    if (textAfterInput != "") {
        textAfterInput = true;
        console.log("superb, its not empty");

        if (textLength > 25) {
            console.log("SUXSEX");
            textInput.style.color = "green";
            textOK.innerHTML = "Amazeballs";
        }

    else {
            textInput.style.color = "red" // nameOK og BAD funker ikke på fargene. Kan se på dette senere. Fanger fargen fra ene..
            textBAD.innerHTML = "At least 25 caracthers!";
            console.log("Error: Not enough caracthers")
        }   

    }
    
    else {
        textBAD.innerHTML = "We need something, mmkey";
        console.log("Error: No content")
    }






}



form.addEventListener("submit", validateForm);