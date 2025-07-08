"use strict"

window.onload = function() {
    const arrowDownIcon = document.querySelector("#itDetails i");
    // window.scrollTo({"top": 0, "behavior": "smooth"});
    let isOpened = false;

    itDetails.addEventListener("click", function() {
        isOpened = !isOpened;
        if (isOpened) {
            programmingLanguages.classList.remove("d-none");
            arrowDownIcon.classList.remove("d-none");
            return;
        }

        programmingLanguages.classList.add("d-none");
        arrowDownIcon.classList.add("d-none");
    });
}