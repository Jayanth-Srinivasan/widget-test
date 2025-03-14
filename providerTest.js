(function () {
    alert("Script loaded");

    function updateDiv() {
        var targetDiv = document.querySelector(".trigger-div");
        if (targetDiv) {
            targetDiv.textContent = "Hello, this text was injected from an external CDN!";
        } else {
            console.error("Target div with class 'trigger-div' not found.");
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateDiv);
    } else {
        updateDiv();
    }
})();
