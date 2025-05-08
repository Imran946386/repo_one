// Check and retrieve cookie values
document.addEventListener('DOMContentLoaded', function() {
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
    }
    return null;
    }
    let userName = getCookie('name');
    let userTheme = getCookie('theme');
    if (!userName || !userTheme) {
    userName = prompt("Welcome to my website! Please enter your name:");
    userTheme = prompt("Choose your theme (dark/light):").toLowerCase();
    document.cookie = `name=${userName}; max-age=${60 * 60 * 24 * 7}; path=/`;
    document.cookie = `theme=${userTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
    // Apply personalized greeting
    const welcome = document.getElementById("welcome-message");
    console.log('Welcome element:', welcome);
    console.log('Username:', userName);
    
    if (welcome && userName) {
        welcome.textContent = `Great to see you again, ${userName}`;
        console.log('Greeting updated');
    } else {
        console.log('Could not update greeting: welcome=', welcome, 'userName=', userName);
    }
    // Apply theme
    if (userTheme === 'dark') {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
    } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
    }
});