function startParty() {
    // Start Music
    const music = document.getElementById('bg-music');
    music.play();

    // Move to Cake Screen
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');
}

function handleCakeClick() {
    const cake = document.getElementById('cake-emoji');
    const instruction = document.getElementById('cake-instruction');

    // Change cake to a slice
    cake.innerHTML = "🍰";
    instruction.innerText = "Yum! Opening your card...";

    // Burst of Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Wait 1.5 seconds, then show the card
    setTimeout(() => {
        document.getElementById('cake-screen').classList.add('hidden');
        document.getElementById('card-screen').classList.remove('hidden');
    }, 1500);
}
