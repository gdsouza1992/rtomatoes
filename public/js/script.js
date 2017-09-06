function scrollCarousel(scrollDirection){
	var SCROLL_DISTANCE = 754;
	var slider = document.getElementById('slider-image-holder')
	var leftPosition = parseInt(slider.style.left, 10) || 0;
	leftPosition += scrollDirection * SCROLL_DISTANCE;
	slider.style.left = leftPosition+"px";
}

document.getElementById('slider-button-left').addEventListener('click', function(){
	scrollCarousel(1);
});
document.getElementById('slider-button-right').addEventListener('click', function(){
	scrollCarousel(-1);
});