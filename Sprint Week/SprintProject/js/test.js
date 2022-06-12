const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

var currentTotalAmount = "current-total-amount";
var total = "total-amount";

var checkboxArray = new Array("champagne", "coffee", "shirley-temple", "virgin-rum", "strawberry-squash", "water", "milk-shake", "road-kill", "pizza", "deer", "chicken-strip-combo", "reindeer", "moose", "burger-combo", "moose-droppings", "blueberry-pie", "choc-brownie", "ice-cream", "cheesecake", "worms-dirt", "choc-cake", "big-spicy", "gary-sampler", "fab-fingers", "blue-balls", "nuggets", "blue-basket",  "small-blue-bucket", "blue-bucket", "big-gary", "big-burrito", "chicken-burger", "burger", "chicken-strip", "hero-sub","club-sandwich", "blt-sandwich","big-breakfast","eggs-bacon","waffles","omelette","chicken-waffle","egg-in","burrito" );

function AddCheckedProducts()
{
   var value = 0.0;
   for( var i=0; i<checkboxArray.length; i++ )
   {
      var d = document.getElementById(checkboxArray[i]);
      if( d.checked ) { value += parseFloat(d.value); }
   }
   let fullTotal = value*1.15;
   document.getElementById(currentTotalAmount).innerHTML = value.toFixed(2);
   document.getElementById(total).innerHTML = fullTotal.toFixed(2);

}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("banner");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); 
}



