var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-gai.png'){
        myImage.setAttribute('src','images/passport.png')
    } else {
        myImage.setAttribute('src','images/logo-gai.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'GeniusAlpha is cool, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var StoredName = localStorage.getItem('name');
    myHeading.textContent = 'GeniusAlpha is cool, ' + StoredName;
} 
myButton.onclick = function() {
    setUserName();
}