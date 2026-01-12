// 1. App State
let isPremiumUser = false;
let batteryOn = false;
let engineRunning = false;

// 2. DOM Elements
const batterySwitch = document.getElementById('battery-switch');
const engineBtn = document.getElementById('engine-btn');
const lightBattery = document.getElementById('light-battery');
const lightEngine = document.getElementById('light-engine');
const planeDisplay = document.getElementById('current-plane');

// 3. Logic Functions
batterySwitch.addEventListener('change', (e) => {
    batteryOn = e.target.checked;

    // Update Visuals
    lightBattery.style.backgroundColor = batteryOn ? "#00ff00" : "#444";

    // Engine can only be clicked if battery is ON
    engineBtn.disabled = !batteryOn;

    if (!batteryOn) {
        engineRunning = false;
        lightEngine.style.backgroundColor = "#444";
    }
});

engineBtn.addEventListener('mousedown', () => {
    if (batteryOn) {
        // Simulating engine crank
        planeDisplay.innerText += "...Cranking...";
        setTimeout(() => {
            engineRunning = true;
            lightEngine.style.backgroundColor = "#ffcc00";
            planeDisplay.innerText = "ENGINE RUNNING";
        }, 1500);
    }
});

function selectPlane(plane) {
    if (plane === 'F-35' && !isPremiumUser) {
        alert("This plane requires a Premium Account!");
        return;
    }
    planeDisplay.innerText = "Active Plane: " + plane;
}

function unlockPremium() {
    isPremiumUser = true;
    document.getElementById('premium-btn').innerText = "F-35 (Unlocked!)";
    alert("Premium Unlocked! You can now access the F-35.");
}