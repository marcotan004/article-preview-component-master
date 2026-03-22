const shareTooltip = document.getElementById("share-tooltip");
const profile = document.getElementById("profile");
const shareContainer = document.getElementById("share-container");
const footerDisplay = document.getElementById("footer-display");
const shareRibbon = document.getElementById("share-ribbon");

const toggleShare = (e) => {
    if (profile.classList.contains("hidden")) {
        profile.classList.remove("hidden");
        shareTooltip.classList.add("hidden");
        footerDisplay.classList.remove("dark");
    } else {
        shareTooltip.classList.remove("hidden");
        profile.classList.add("hidden");
        footerDisplay.classList.add("dark");
    }
    
}

shareContainer.addEventListener('click', toggleShare);