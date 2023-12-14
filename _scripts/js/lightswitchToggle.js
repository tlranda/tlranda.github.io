// Switching implementation from: https://derekkedziora.com/blog/dark-mode-revisited

// Figure out if system dark mode is set, then check storage for override
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem("theme");

// Set text description on the button
if (systemInitiatedDark.matches) {
	document.getElementById("lightswitch-toggle").innerHTML = "☀️  Light Mode";
} else {
	document.getElementById("lightswitch-toggle").innerHTML = "🌑 Dark Mode";
}

function setLightswitch(mode) {
	document.documentElement.setAttribute("data-theme", mode);
	sessionStorage.setItem("theme", mode);
	inverseMode = mode === "light" ? "🌑 Dark Mode" : "☀️ Light Mode";
	document.getElementById("lightswitch-toggle").innerHTML = inverseMode;
}

function prefersColorTest(systemInitiatedDark) {
	if (systemInitiatedDark.matches) {
		setLightswitch("dark");
	} else {
		setLightswitch("light");
	}
}
systemInitiatedDark.addListener(prefersColorTest);

function lightswitchToggle() {
	// Do not forget to check the overrides
	let theme = sessionStorage.getItem("theme");
	// Check if dark mode was selected
	if (theme === "dark") {
		setLightswitch("light");
	} else if (theme === "light") {
		setLightswitch("dark");
	} else if (systemInitiatedDark.matches) {
		setLightswitch("light");
	} else {
		setLightswitch("dark");
	}
}

// Ensure set correctly on page load
if (theme === "dark") {
	setLightswitch("dark");
} else if (theme === "light") {
	setLightswitch("light");
}

