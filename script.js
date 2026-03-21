const shareTooltip = document.getElementById("share-tooltip");
const profile = document.getElementById("profile");
const shareContainer = document.getElementById("share-container");
const footerDisplay = document.getElementById("footer-display");

const toggleShare = (e) => {
    if (profile.classList.contains("hidden")) {
        profile.classList.remove("hidden");
        shareTooltip.classList.add("hidden");
        footerDisplay.classList.remove("footer-display-share");
        footerDisplay.classList.add("footer-display-profile");
    } else {
        profile.classList.add("hidden");
        shareTooltip.classList.remove("hidden");
        footerDisplay.classList.add("footer-display-share");
        footerDisplay.classList.remove("footer-display-profile");
    }
    
}

shareContainer.addEventListener('click', toggleShare);