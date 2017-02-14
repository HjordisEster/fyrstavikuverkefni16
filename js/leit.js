var searchResults = [];
var count = 0;



window.onload = function() {


	document.getElementById("searchfieldid")
		.addEventListener("keyup", function(event) {
		    search(this.value);
		});

}


function search(searchString) {
	// byrja ad na i leitarstrenginn ur domminu
	// og vista sem breytu
	var searchResultsArr = [];
	
	for (var i = 0 ; i < products.length ; i++) {

		var productsname = products[i].name.toLowerCase();

		if (productsname.includes(searchString.toLowerCase())) {
			searchResultsArr.push(products[i]);
		}
	}

	var searchResults = document.getElementsByClassName('searchresults')[0];

	while (searchResults.firstChild) {
		searchResults.removeChild(searchResults.firstChild);
	}

	searchResults.style.display="block";

	searchResultsArr.forEach(function(product) {
		var a = document.createElement('a');
		a.href = '#';
		a.innerText = product.name;
		a.addEventListener('click', function(e) {
			e.preventDefault();
			productClicked(product.id);
			searchResults.style.display="none";
		})
		searchResults.appendChild(a);
	})	

}
