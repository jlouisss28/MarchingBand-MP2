function SaveAbsent() {
	var name = document.getElementById("1");
	var attendance = document.getElementById("absent");
	localStorage.setItem(name, attendance);
	showAll();
}

function SaveLate() {
	var name = document.getElementById("1");
	var attendance = document.getElementById("late");
	localStorage.setItem(name, attendance);
	showAll();
}

// dynamically draw the table
function showAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Name</th><th>Attendance</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Name</th><th>Attendance</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('atlist').innerHTML = list;
	} else {
		alert('Cannot store as your browser do not support local storage');
	}
}


/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}