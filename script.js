document.addEventListener('DOMContentLoaded', () => {
    const text = "30 December 2006... A special soul was born. ✨";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                document.getElementById('date-screen').classList.add('hidden');
                document.getElementById('intro-screen').classList.remove('hidden');
            }, 2000);
        }
    }
    typeWriter();
});

function startParty() {
    const music = document.getElementById('bg-music');
    music.play().catch(e => console.log("Music play blocked by browser"));
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');
}

function handleCakeClick() {
    document.getElementById('cake-emoji').innerHTML = "🍰";
    
    // Confetti burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        document.getElementById('cake-screen').classList.add('hidden');
        document.getElementById('card-screen').classList.remove('hidden');
    }, 1500);
}

function showStory() {
    document.getElementById('card-screen').classList.add('hidden');
    document.getElementById('story-screen').classList.remove('hidden');
    
    // Start the scroll observer for the zoom effect
    initScrollZoom();
}

function initScrollZoom() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-zoom');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.story-item img').forEach(img => {
        observer.observe(img);
    });
}
