/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://heylink.me/selisih2rb/", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://www.whatsapp.com/channel/0029Vb7NI3h4CrfnphzhDK02");
}

function openFacebookPage() {
    window.open("https://t.me/vidiovirall123");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

// Overlay muncul di detik tertentu
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1 && !overlayClicked) {
        overlay.classList.add("show");
    }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("https://heylink.me/selisih2rb/", "_blank");
});







