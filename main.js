function addToCart() {
  var qty = $('#cartQty').text();
  var newQty = $('#cartQty').text(Number(qty) + 1);
  $('#added').text("Adding!")
    //annonimous function inside a function
    //setTimeout  the code in the function is run after the timeout
    return window.setTimeout(function(){

      $('#added').text("Buy Now")
    }, 2000)
  return newQty;
}

function checkClass(header, content) {
  console.log("Check Class")
  if ($(header).hasClass('active')) {
    $(header).removeClass('active');
    $(content).addClass('hidden');
  }
  return true;
}

function makeActive(header, content) {
  console.log("make active");
  checkClass('#product_details', '#detailConent');
  checkClass('#sizeFit', '#sizeFitDetail');
  checkClass('#review', '#review-content');
  $(header).addClass('active');
  $(content).removeClass('hidden');
}
