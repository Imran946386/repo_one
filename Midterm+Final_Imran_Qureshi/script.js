document.addEventListener('DOMContentLoaded', function() { // Event lister for Document Object Model when loading page
    const colors = ["#D40000", "#545b62", "#F6F305"]; // Rosso Corsa(Red), Gray Titanium, Giallo Modena(Yellow)
    console.log("The first color in the array is:", colors[0]);
    const userName = prompt("What is your name?");
    const colorChoice = prompt("Pick a background color: 0 for Red, 1 for Gray, 2 for Yellow");
    const userInfo = {name: userName, selectedColor: colors[colorChoice]};
    document.body.style.backgroundColor = userInfo.selectedColor;
})