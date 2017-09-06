function scrollCarousel(scrollDirection){
	var slider = document.getElementById('slider-image-holder');
	
	var sliderLength = parseInt(slider.dataset.sliderlength);
	var sliderPosition = parseInt(slider.dataset.slidercurrentwindow);
	
	var CAROUSEL_ARTICLES = 4;
	var MAX_SCROLL = sliderLength % CAROUSEL_ARTICLES; 
	var MIN_SCROLL = 0; 
	var SCROLL_DISTANCE = 753;
	var newSliderPosition = sliderPosition - scrollDirection;
	
	if(newSliderPosition < MAX_SCROLL && newSliderPosition >= MIN_SCROLL){
		slider.dataset.slidercurrentwindow = newSliderPosition;
		var leftPosition = parseInt(slider.style.left, 10) || 0;
		leftPosition += scrollDirection * SCROLL_DISTANCE;
		slider.style.left = leftPosition+"px";
	}
}

document.getElementById('slider-button-left').addEventListener('click', function(){
	scrollCarousel(1);
});
document.getElementById('slider-button-right').addEventListener('click', function(){
	scrollCarousel(-1);
});


var slider = document.getElementById('slider-image-holder');
var sliderLength = parseInt(slider.dataset.sliderlength);
slider.style.width = (sliderLength * 188)+"px";


