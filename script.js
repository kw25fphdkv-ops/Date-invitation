function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
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
        alert("Looking forward to seeing you ❤️");
    }, 600);
}
