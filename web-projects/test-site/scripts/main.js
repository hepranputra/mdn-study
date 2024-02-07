// Select the element to change.
const myImage = document.querySelector("img");

// An arrow function that check a condition.
// If that condition is fulfilled, the image will changed.
myImage.onclick = () => {
    // Target src attribute in img element.
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/screenshot-1.png") {
        // Change the image.
        myImage.setAttribute("src", "images/hah.jpg");
    } else {
        myImage.setAttribute("src", "images/screenshot-1.png");
    }
    
};

// document.querySelector targets my html's button element.
let myButton = document.querySelector("button");

// document.querySelector targets my html's h1 element.
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Your name: ");

    // This if block persist if no name is given, like giving
    // empty string or clicking cancel button that resulting
    // null.
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}!`
    }
}


// The if block check if we already set the name before.
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}!`;
}

myButton.onclick = () => {
    setUserName();
};
