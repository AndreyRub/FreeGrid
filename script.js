document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("image1").addEventListener("click", function() {
        new Audio('sounds/sound1.mp3').play();
    });

    document.getElementById("image2").addEventListener("click", function() {
        new Audio('sounds/sound2.mp3').play();
    });
});