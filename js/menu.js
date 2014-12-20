(function (window, document) {
	var menu = document.getElementById("menu"),
		button = document.getElementById("menu-toggle");

	button.onclick = function() {
		menu.className = menu.className === "open" ? "" : "open";
	};
})(window, document);