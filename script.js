// 1. Countdown Logic
function updateTimer() {
    const target = new Date("December 30, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "ITS TIME! 🎂";
    } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }
}
setInterval(updateTimer, 1000);

// 2. Typewriter for Date
document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    const text = "30 December 2006... A special soul was born. ✨";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++; setTimeout(type, 80);
        } else {
            setTimeout(() => {
                document.getElementById('timer-screen').classList.add('hidden');
                document.getElementById('question-screen').classList.remove('hidden');
            }, 2500);
        }
    }
    type();
});

// 3. Celebration Sequence
function startCelebration() {
    document.getElementById('bg-music').play();
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');

    // Dim lights and then light candles
    setTimeout(() => {
        const flames = document.querySelectorAll('.flame');
        flames.forEach((f, index) => {
            setTimeout(() => { f.classList.remove('hidden'); }, index * 500);
        });
        document.getElementById('cake-hint').innerText = "Make a wish and click the cake!";
    }, 2000);
}

function handleCakeClick() {
    document.body.style.background = "#fff0f5"; // Lights on!
    document.getElementById('cake-screen').classList.remove('dark-room');
    document.getElementById('cake-emoji').innerHTML = "🍰";
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    setTimeout(() => {
        document.getElementById('cake-screen').classList.add('hidden');
        document.getElementById('card-screen').classList.remove('hidden');
        
        // Auto-open card slowly after 1 second
        setTimeout(() => {
            document.getElementById('birthday-card').classList.add('open');
        }, 1000);
    }, 1500);
}

// Story logic
function showStory() {
    document.getElementById('card-screen').classList.add('hidden');
    document.getElementById('story-screen').classList.remove('hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-zoom'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.story-item img').forEach(img => observer.observe(img));
}
