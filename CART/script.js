function redirectToLink(selector, url) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener('click', () => {
            window.location.href = url;
        });
    }
}