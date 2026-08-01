function scrollDown() {
    const sections = document.querySelectorAll("section");
    const current = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > current + 50) {
            sections[i].scrollIntoView({
                behavior: "smooth"
            });
            return;
        }
    }
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
