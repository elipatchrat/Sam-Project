// --- State Tracking ---
let isPowerOn = false;
let isEngineRunning = false;
let isPremium = false;

// --- DOM Elements ---
const hbBattery = document.getElementById('hitbox-battery');
const hbEngine = document.getElementById('hitbox-engine');
const glowPower = document.getElementById('glow-power');
const glowEngine = document.getElementById('glow-engine');
const debugToggle = document.getElementById('debug-toggle');
const container = document.getElementById('cockpit-container');

// Add this at the top of your existing script.js
const statusDisplay = document.getElementById('status-display');

// Inside your battery event listener:
statusDisplay.innerText = isPowerOn ? "SYSTEMS READY" : "SYSTEM OFFLINE";
statusDisplay.style.color = isPowerOn ? "#00ff00" : "#ff0000";

// Inside your engine event listener:
statusDisplay.innerText = "ENGINE ACTIVE";
statusDisplay.style.color = "gold";

// --- Interactions ---

// 1. Master Battery Toggle
hbBattery.addEventListener('click', () => {
    isPowerOn = !isPowerOn;
    glowPower.style.opacity = isPowerOn ? "1" : "0";

    // Safety: If power goes off, engine dies
    if (!isPowerOn) {
        isEngineRunning = false;
        glowEngine.style.opacity = "0";
    }
    console.log("Master Battery:", isPowerOn);
});

// 2. Engine Start Logic
hbEngine.addEventListener('click', () => {
    if (!isPowerOn) {
        alert("CRITICAL: No electrical power. Check Master Battery.");
        return;
    }

    // Simulate ignition delay
    console.log("Cranking engine...");
    setTimeout(() => {
        isEngineRunning = true;
        glowEngine.style.opacity = "1";
        console.log("Engine Stable.");
    }, 800);
});

// 3. Premium Toggle
function togglePremium() {
    isPremium = !isPremium;
    document.getElementById('unlock-btn').innerText = isPremium ? "Premium Active" : "Unlock Premium Planes";
    document.getElementById('plane-name').innerText = isPremium ? "Current: F-35 Lightning II" : "Current: F-18 Hornet";
    alert(isPremium ? "Premium Access Granted!" : "Back to Basic Access.");
}

// 4. Debug Helper
debugToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        container.classList.add('show-hitboxes');
    } else {
        container.classList.remove('show-hitboxes');
    }
});