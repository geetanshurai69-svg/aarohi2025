document.addEventListener('DOMContentLoaded', () => {
    const text = "30 December 2006... A special day was born.";
    let i = 0;
    const speed = 100;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Wait 2 seconds then show the Let's Celebrate screen
            setTimeout(() => {
                document.getElementById('date-screen').classList.add('hidden');
                document.getElementById('intro-screen').classList.remove('hidden');
            }, 2000);
        }
    }
    typeWriter();
});

function startParty() {
    document.getElementById('bg-music').play();
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');
}

function handleCakeClick() {
    document.getElementById('cake-emoji').innerHTML = "🍰";
    
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
