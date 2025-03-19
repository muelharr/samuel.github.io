document.addEventListener("DOMContentLoaded", function () {
    const text = "I'm a Web Developer & Programmer";
    const typingText = document.getElementById("typing-text");
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            typingText.innerText = text.slice(0, index + 1);
            index++;
            if (index === text.length) {
                setTimeout(() => isDeleting = true, 2000); 
            }
        } else {
            typingText.innerText = text.slice(0, index);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100); 
    }

    typeEffect();
});