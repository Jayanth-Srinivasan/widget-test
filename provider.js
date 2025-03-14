document.addEventListener("DOMContentLoaded", function () {
    alert("script loaded");
    
    var targetDiv = document.querySelector(".trigger-div");
    if (targetDiv) {
        targetDiv.textContent = "Hello, this text was injected from an external CDN!";
    } else {
        console.error("err");
    }
});