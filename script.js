function scrollDown() {
    document.querySelector(".section").scrollIntoView({
        behavior: "smooth"
    });
}

function celebrate() {

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        alert("Dushi asinaaaa🤪

See you at Sakura by Papagayo
August 1 • 8:00 PM 🤎🍣");
    }, 600);
}
