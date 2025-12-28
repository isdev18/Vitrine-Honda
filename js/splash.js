window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    if (!splash) return;

    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
        splash.remove();
    }, 600);
});
