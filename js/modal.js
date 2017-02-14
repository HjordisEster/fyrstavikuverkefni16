window.onload = function () {

	// Get the modal
	var modal = document.getElementById('heg-myModal');
	console.log(modal);

	// Get the button that opens the modal
	var product = document.getElementById("heg-mainImage");
	console.log(product)
	var img = document.getElementById('heg-myImg');
	var modalImg = document.getElementById("heg-img01");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("heg-close")[0];

	// When the user clicks on the button, open the modal
	product.onclick = function() {
		console.log("kk");
	    modal.style.display = "block";
	    modalImg.src = this.src;
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

}