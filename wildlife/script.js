//Infinity Slider
(function() {
	document.querySelector('.latest__slider-block').addEventListener('click', function(e) {
	  let parent = document.querySelector('.latest__sliders');
	  let first = parent.querySelector('.latest__slider');
	  let last = parent.querySelector('.latest__slider:last-child');

	  if (e.target.classList.contains('left__arrow')) parent.insertBefore(last, first);
	  
	  if (e.target.classList.contains('right__arrow')) parent.appendChild(first);
	});
}).call(this);

// Burger Click
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
}