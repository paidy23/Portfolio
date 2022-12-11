let theme = document.getElementById("switch");
let toggle = false;

theme.onclick = function () {
	toggle = !toggle;
	if (toggle) {
		theme.classList.replace("fa-toggle-on", "fa-toggle-off");
	} else {
		theme.classList.replace("fa-toggle-off", "fa-toggle-on");
	}
	document.getElementById("img-light1").classList.toggle("opacity");
	document.getElementById("img-light2").classList.toggle("opacity");

	document.body.classList.toggle("dark-theme");
};

document.getElementById("resume").onclick = function () {
	alert("This feature is not available yet !");
};

window.addEventListener("load", (event) => {
	document.getElementById("body").classList.remove("preload");
});
