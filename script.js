function scrollDown(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function celebrate() {
    // Launch confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    // Show message
    setTimeout(() => {
        alert(`Dushi asinaaaa🤪

See you at Sakura by Papagayo 🍣🤎

📅 Saturday, August 1
🕗 8:00 PM

Can't wait to make some beautiful memories together. 🌹`);
    }, 500);
}
