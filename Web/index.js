"use strict"

window.onload = function() {
    const arrowDownIcon = document.querySelector("#itDetails i");
    const videos = document.getElementsByTagName("video");
    // window.scrollTo({"top": 0, "behavior": "smooth"});

    for (const video of videos) {
        video.addEventListener("click", function() { this.requestFullscreen(); });
    }

    let isOpened = false;
    $(programmingLanguages).hide();

    itDetails.addEventListener("click", function() {
        isOpened = !isOpened;
        if (isOpened) {
            // programmingLanguages.classList.remove("d-none");
            $(programmingLanguages).slideDown(1500);
            arrowDownIcon.classList.remove("d-none");
            return;
        }

        $(programmingLanguages).slideUp(1500);
        arrowDownIcon.classList.add("d-none");
    });
}