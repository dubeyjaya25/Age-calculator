function calculateAge(){
    let UserName = document.getElementById("userName").value;
    let Birthdate = document.getElementById("userAge").value;
    let OutputName = document.getElementById("outputName");
    let AgeOutput = document.getElementById("ageOutput");
    
    if(UserName === "" || Birthdate === ""){
        alert("Sorry! Please enter your Nickname and Date Of Birth both");
        return;
    }
    
    let BirthYear = new Date(Birthdate).getFullYear();
    let CurrentYear = new Date().getFullYear();

    let Age = CurrentYear - BirthYear;
    OutputName.textContent = `${UserName} 😊`;
    AgeOutput.textContent = `🎂 You are ${Age} years old.🎂`
    
}


// if(BirthYear > CurrentYear){
//     alert ("Date of birth needs to be earlier than the age at date. ");
//     return;
// }
// else{
//     let Age = CurrentYear - BirthYear;
//     OutputName.textContent = `${UserName} 😊`;
//     AgeOutput.textContent = `🎂 You are ${Age} years old.🎂`
// }