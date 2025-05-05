const iris = document.querySelector('.iris');
const eye = document.querySelector('.eye');
const eyeContainer = document.querySelector('.eye-container');

eyeContainer.addEventListener('mousemove', (event) => {
    const eyeRect = eye.getBoundingClientRect();
    const centerX = eyeRect.left + eyeRect.width / 2;
    const centerY = eyeRect.top + eyeRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4); // Iris hareket sınırı

    const irisX = distance * Math.cos(angle);
    const irisY = distance * Math.sin(angle);

    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
});
