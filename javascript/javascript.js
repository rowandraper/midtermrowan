document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");

    document.querySelectorAll("a[href]").forEach(link => {
        const url = link.getAttribute("href");

        // ignore external links, anchors, downloads, new tabs
        if (
            url.startsWith("#") ||
            link.target === "_blank" ||
            link.hasAttribute("download") ||
            link.origin !== location.origin
        ) return;

        link.addEventListener("click", e => {
            e.preventDefault();
            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-leaving");

            setTimeout(() => {
                window.location.href = url;
            }, 300); // match CSS duration
        });
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});