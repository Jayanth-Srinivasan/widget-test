(function () {
    alert("Script loaded");

    async function updateDivWithAPI() {
        const targetDiv = document.querySelector(".trigger-div");
        if (!targetDiv) {
            console.error("Target div with class 'trigger-div' not found.");
            return;
        }

        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();

            const injectedText = `Hello from CDN! Here's a joke:\n${data.setup} — ${data.punchline}`;
            
            targetDiv.style.color = "red";
            targetDiv.style.fontFamily = "monospace";
            targetDiv.style.whiteSpace = "pre-line"; 
            targetDiv.textContent = injectedText;
        } catch (error) {
            console.error("Failed to fetch from API:", error);
            targetDiv.textContent = "Failed to load API data.";
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateDivWithAPI);
    } else {
        updateDivWithAPI();
    }
})();
