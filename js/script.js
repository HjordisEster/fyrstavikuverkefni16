var formeitt = document.getElementsByClassName("form1")[0]

var formtvo = document.getElementsByClassName('form2')[0]

var formþri = document.getElementsByClassName('form3')[0]

var formfor = document.getElementsByClassName('form4')[0]

var form1 = function (click){

  if (click){

  console.log('is true');

  formeitt.style.display= "none"

  formtvo.style.display="block"

}

else {

  formeitt.style.display= "block"

  formtvo.style.display="none"

}

}

var form2 = function (click) {

  if (click) {

    formtvo.style.display="none"

    formþri.style.display="block"

  }

  else {

    formtvo.style.display="block"

    formþri.style.display="none"

  }

}

var formback1 = function (click) {

  if (click) {

    formtvo.style.display="none"

    formeitt.style.display="block"

  }

}

var formback2 = function (click) {

  if (click) {

    formþri.style.display="none"

    formtvo.style.display="block"

  }

}

function FillBilling(f) {

  var first_name = document.getElementById('lnamefirst').value,

  last_name = document.getElementById('lnamelast').value;

  var full_name = first_name+" "+last_name;

  f.billingname.value = full_name;

  var adress = document.getElementById('lnameA').value;

  var copyadress = adress;

  f.billadress1.value = copyadress;

  var adress = document.getElementById('lnameA').value;

  var copyadress = adress;

  f.billadress1.value = copyadress;

  var adress2 = document.getElementById('lnameA2').value;

  var copyapt = adress2;

  f.billapt.value = copyapt;

  var city = document.getElementById('lnameTC').value;

  var copycity = city;

  f.billingcity.value = copycity;

  var postcode = document.getElementById('lnameP').value;

  var copypost = postcode;

  f.postcode.value = copypost;

  var country = document.getElementById('country').value;

  var copycountry = country;

  f.billcountry.value = copycountry;

}

$(document).ready(function(){

  $('.paypal ul li a').click(function(e){

    e.preventDefault();

    $('.paypal ul li a').removeClass("active");

    $(this).addClass("active");

});

});