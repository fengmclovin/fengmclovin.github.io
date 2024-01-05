document.addEventListener('DOMContentLoaded', function () {
    // This function runs when the DOM is fully loaded

    // Example: Change the color of the heading in the "Home" section
    changeHeadingColor();

});

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function changeHeadingColor() {
    // Get the heading element in the "Home" section
    var homeHeading = document.querySelector('#home h1');

    // Change the color of the heading
    homeHeading.style.color = getRandomColor();
}

function getRandomColor() {
    // Generate a random color in hexadecimal format
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}