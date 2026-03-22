const footerDisplay = document.getElementById("footer-display");

const toggleShare = (e) => {
    if (footerDisplay.classList.contains("share-open")) {
        footerDisplay.classList.remove("share-open");

    } else {
        footerDisplay.classList.add("share-open");
    }
}

shareContainer.addEventListener('click', toggleShare);