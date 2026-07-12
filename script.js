// Gallery functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.gallery-slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

// Wishes functionality
const wishes = [
    "🌟 Happiness in every moment",
    "💪 Good health and strength",
    "🏆 Success in all endeavors",
    "☮️ Peace in your heart",
    "✨ Confidence in yourself",
    "🌍 Adventures and new experiences",
    "👥 True friendships that last forever",
    "😊 Endless smiles on your face",
    "❤️ The warmth of family love",
    "🌈 All your dreams fulfilled",
    "💫 Inner strength and resilience",
    "🦁 Courage to face any challenge",
    "💕 Love in abundance",
    "🌱 Personal growth and wisdom",
    "🎉 Laughter and joy always",
    "🙏 Gratitude for life's blessings",
    "✨ Pure joy and happiness",
    "📚 Wisdom beyond your years",
    "🤲 Kindness that touches hearts",
    "🎯 A sense of purpose and direction",
    "✨ Magic in every moment",
    "🌟 A smile that never fades"
];

function showWish(index) {
    const wishText = document.getElementById('wishText');
    wishText.textContent = wishes[index];
}

// Surprise functionality
let confettiTriggered = false;

function triggerSurprise() {
    if (!confettiTriggered) {
        confettiTriggered = true;
        createConfetti();
        setTimeout(() => {
            showSurpriseMessage();
        }, 500);
        setTimeout(() => {
            confettiTriggered = false;
        }, 3000);
    }
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#FFB6D9', '#E6D9F5', '#FFD700', '#FF1493', '#FF69B4'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.textContent = ['🎉', '🎊', '❤️', '💖', '✨'][Math.floor(Math.random() * 5)];
        confetti.style.fontSize = '2rem';
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function showSurpriseMessage() {
    const message = document.getElementById('surpriseMessage');
    message.classList.add('show');
    message.classList.remove('hidden');
}

// Smooth scroll to gallery
function scrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize first wish display
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    showWish(0);
});