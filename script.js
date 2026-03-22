const shareContainer = document.getElementById("share-container");
const footerDisplay = document.getElementById("footer-display");

const toggleShare = (e) => {
    if (!footerDisplay || !shareContainer) {
        return;
    }

    if (footerDisplay.classList.contains("share-open")) {
        footerDisplay?.classList.remove("share-open");
        shareContainer?.setAttribute("aria-expanded", "false");

    } else {
        footerDisplay?.classList.add("share-open");
        shareContainer?.setAttribute("aria-expanded", "true");
    }
}

if (shareContainer) {
    shareContainer.addEventListener('click', toggleShare);
}
