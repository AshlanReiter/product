// Animated product name effect
const productName = document.getElementById('product-name');
const nameText = 'Mistake Eraser';
let index = 0;

function typeEffect() {
    productName.textContent = nameText.substring(0, index++);
    if (index <= nameText.length) {
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Dark mode toggle with saved preference
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to apply dark mode
function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark');
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark');
        darkModeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check saved dark mode preference on load
if (localStorage.getItem('darkMode') === 'enabled') {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark');
    setDarkMode(!isDarkMode);
});

// Product color change logic
const tapePreview = document.getElementById('tapePreview');
const colorOptions = document.querySelectorAll('.color');

colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        const selectedColor = color.getAttribute('data-color');
        const colors = {
            white: '#ffffff',
            black: '#000000',
            brown: '#c49a6c'
        };
        tapePreview.style.backgroundColor = colors[selectedColor];
        tapePreview.style.color = selectedColor === 'black' ? 'white' : 'black';
        alert(`You chose: ${color.textContent}`);
    });
});

// Buy Now fake checkout
document.getElementById('buyNow').addEventListener('click', () => {
    const bgColor = tapePreview.style.backgroundColor;
    if (!bgColor || bgColor === 'transparent') {
        alert('Please select a color first!');
    } else {
        const colorName = Object.keys({white: '#ffffff', black: '#000000', brown: '#c49a6c'})
            .find(key => ({white: '#ffffff', black: '#000000', brown: '#c49a6c'}[key] === bgColor));
        const confirmPurchase = confirm(`You are about to purchase a Correction Tape in ${colorName}. Proceed?`);
        if (confirmPurchase) {
            alert('Thank you for your purchase!');
        }
    }
});
