const charactersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charactersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";","\"","'","<",",",">",".","?","/"];

let pass1_el = document.getElementById("pass1")
let pass2_el = document.getElementById("pass2")

// rand = Math.floor(Math.random() * charactersLower.length)
// console.log(charactersLower[rand], rand)

function passwordGenerator(isCU=true, isCL=true, isNum=true, isSym=true, passChar=16) {
    let preferences = {
        isCU: {
            bool: isCU,
            data: charactersUpper
        },
        isCL: {
            bool: isCL,
            data: charactersLower
        },
        isNum: {
            bool: isNum,
            data: numbers
        },
        isSym: {
            bool: isSym,
            data: symbols
        },
    }
   
    let combineData = []

    for (const [key, value] of Object.entries(preferences)) {
        if (value.bool) {
            combineData = combineData.concat(value.data)
        }
    }

    // console.log(combineData)
    // console.log("Total characters:", combineData.length)
    // return combineData

    let generatedPass = ""
    for (i=0; i<passChar; i++){
        randNum = Math.floor(Math.random() * combineData.length)
        generatedPass += combineData[randNum]
    }
    console.log(generatedPass)
    return generatedPass
}

// passwordGenerator()
// passwordGenerator(true, true, false, false); // Only upper and lower case
// passwordGenerator(false, false, true, true); // Only numbers and symbols

function GeneratePassword() {
    // Get boolean values from checkboxes
    let isCU = document.getElementById("charactersUpper").checked;
    let isCL = document.getElementById("charactersLower").checked;
    let isNum = document.getElementById("numbers").checked;
    let isSym = document.getElementById("symbols").checked;


    pass1_el.value = passwordGenerator(isCU, isCL, isNum, isSym)
    pass2_el.value = passwordGenerator(isCU, isCL, isNum, isSym)
}

function copyToClipboard(element) {
    // Select the text field
    element.select()
    element.setSelectionRange(0, 99999) // For mobile devices

    // Copy the text inside the text field.
    document.execCommand("copy")

    console.log("Copied the text: "+ element.value)
    alert("Copied the text: "+ element.value)
}
