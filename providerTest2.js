(function () {
    alert("Script loaded");

    // Step 1: Load external CSS from CDN
    const cssHref = "https://cdn.jsdelivr.net/gh/Jayanth-Srinivasan/widget-test@main/widget-style.css";
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssHref;
        document.head.appendChild(link);
    }

    async function updateDivWithAPI() {
        const targetDiv = document.querySelector(".trigger-div");
        if (!targetDiv) {
            console.error("Target div with class 'trigger-div' not found.");
            return;
        }

        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();

            const injectedText = `Hello from Jay, Here's a joke:\n${data.setup} — ${data.punchline}`;
            
            targetDiv.classList.add("joke-text");
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
