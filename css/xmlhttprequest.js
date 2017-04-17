	for(var i=0; i<400;i++) {
		var request = new XMLHttpRequest();
	request.open('GET','Members.txt', true);
	request.send();

	request.onreadystatechange = function() {
		if(request.readyState<4) {
			document.getElementById('div1').innerHTML = "Loading...";
			console.log(request);
		} else if (request.readyState===4 && request.status===200) {
			document.getElementById('div1').innerHTML = request.responseText;
			console.log(request);
		}
	}
	}