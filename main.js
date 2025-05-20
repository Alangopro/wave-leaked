// ==== opens the jumpscare ====//
function showJumpscare() {
        const jumpscare = document.getElementById("jumpscare");
        const video = document.getElementById("jumpscareVideo");
        jumpscare.classList.remove("hidden");
        video.play();
        document.body.style.overflow = "hidden";
}

// ==== closes the jumpscare ====//
function closeJumpscare() {
        const jumpscare = document.getElementById("jumpscare");
        const video = document.getElementById("jumpscareVideo");
        jumpscare.classList.add("hidden");
        video.pause();
        video.currentTime = 0;
        document.body.style.overflow = "";
}
