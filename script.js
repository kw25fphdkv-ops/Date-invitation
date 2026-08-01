function scrollDown(id) {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function celebrate() {

    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    setTimeout(function () {
        alert(`Dushi asinaaaa🤪

See you at Sakura by Papagayo
Saturday, August 1
🕗 8:00 PM 🤎🍣`);
    }, 600);
}
