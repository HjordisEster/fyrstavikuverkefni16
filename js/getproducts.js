 var renderTemplate = function(element, htmlDocument){

 var xhr= new XMLHttpRequest();

 xhr.open('GET', htmlDocument, true);

 xhr.onreadystatechange= function() {

     if (this.readyState===4 && this.status===200) //muna að breyta 0 í 200 þegar síðan fer á ftp serverinn

       element.innerHTML = this.responseText;

 };

 xhr.send();

}
renderTemplate(document.getElementById("content"), "content.html")
renderTemplate(document.getElementById("basket"), "basket.html")
renderTemplate(document.getElementById("home"), "home.html")

//function basketClicked() {
	// find the html for basket and load it
//}

function switchImage(pic) {


	// take the thumbnail and show it in the main image holder
	// id=heg-mainImage

	document.getElementById("heg-mainImage").src= pic.src;
  
}

var product;
//product	= products[imageId -1];

function productClicked(imageId) {
	// þurfum að ná í rétt product í products.js útfrá imageId

	//var product; // breyta til þess að geyma rétt product eftir að það finnst.

	/*products.forEach(function(p, i) {
		if(p.id === imageId) {
			product = p;
		}
	});*/

	product	= products[imageId -1];
	//document.getElementById("content").innerHTML='<object type="text/html" data="vorulysing.html" ></object>';

	var productAbout = document.getElementById("heg-product-about");

	var aboutsplit = product.about.split("-");
	console.log(aboutsplit);

	productAbout.innerHTML = "";

	aboutsplit.forEach(function(p, i) {
		
		productAbout.innerHTML = productAbout.innerHTML + "<li>" + p + "</li>";
	});


	var productMoreAbout = document.getElementById("heg-more-about");

	var aboutsplit = product.aboutMore.split("-");
	console.log(aboutsplit);

	productMoreAbout.innerHTML = "";

	aboutsplit.forEach(function(p, i) {
		
		productMoreAbout.innerHTML = productMoreAbout.innerHTML + "<li>" + p + "</li>";
	});
	

	// Find the correct DOM element for the title and write the new product title to the dom element
	var productTitle = document.getElementById('heg-product-title');
	productTitle.textContent = product.name;

	// find the dom elements for the rest of product properties (subname, price, about, etc) and write to them with the correct product values
	var productSubTitle = document.getElementById('heg-product-sub-title');
	productSubTitle.textContent = product.subname;

	var productPrice = document.getElementById("heg-product-price");
	productPrice.textContent = product.price;

	var productImage = document.getElementById("heg-mainImage");
	productImage.src = product.images[0];

	var productImageThumb = document.getElementById("heg-thumbnails");
	productImage.src = product.images[0];

	productImageThumb.innerHTML = "";

	product.images.forEach(function(image,i){
		productImageThumb.innerHTML	+= '<div id="heg-thumbnail0'+i+1+'" class="heg-product-image-thumbnail-component__container">'
									+ '<img onclick="switchImage(this)"  src="'+image+'"  class="heg-product-image-thumbnail-component__container" id="thumbnail-one">'
									+'</div>'
	});
	
 	var home = document.getElementById("ir-grid");
	 var content = document.getElementById("vorumain");
	
	 home.style.display= "none";
	content.style.display= "block";

}	
	


function addToBasket(){
	addToBasket.Push(product);
}
// var formss = document.getElementById("searchid")

function searchclick(){
 	document.getElementById("searchid").style.display = "none";
 	document.getElementById("searchfieldid").style.display = "block";
 }

/*function basketclick(true){

	 var home = document.getElementById("ir-grid");
	// var content = document.getElementById("vorumain");
	 var basket = document.getElementById("ss-wrapper2");

	  home.style.display= "none";
	//content.style.display= "none";
	basket.style.display= "block";
}
*/