function ibg() {
	let arrIbg = document.getElementsByClassName('ibg');
	for (let item of arrIbg) {
		if (item.children.length > 0) {
			item.style.backgroundImage = `url(${item.children[0].getAttribute('src')})`;
			item.children[0].style.display = 'none';
		}
	}
};
ibg();

//=========================================

function togActive() {
	document.querySelector('.icon-menu').classList.toggle('active');
	document.querySelector('.menu__body	').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}
document.querySelector('.icon-menu').onclick = togActive;

//=========================================

//slick slider
$(document).ready(function () {
	$('.slider__body').slick({
		accessibility: false,
		dots: true,
		arrows: false,
		adaptiveHeight: true,
	});
});