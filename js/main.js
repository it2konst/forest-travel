const navIcon = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.pop-up-nav');
const ativeIcon = 'nav-icon--active';
const ativeMenu = 'pop-up-nav--active';

navIcon.onclick = function (event) {
	event.stopPropagation();
	navIcon.classList.toggle(ativeIcon);
	navMenu.classList.toggle(ativeMenu);
};

navMenu.onclick = function (event) {
	event.stopPropagation();
};

document.querySelectorAll('.pop-up-nav a').forEach(function (item) {
	item.addEventListener('click', function (event) {
		event.stopPropagation();
		navIcon.classList.remove(ativeIcon);
		navMenu.classList.remove(ativeMenu);
	})
});

document.querySelector('body').onclick = function () {
	if (document.querySelector('.pop-up-nav.pop-up-nav--active')) {
		navIcon.classList.remove(ativeIcon);
		navMenu.classList.remove(ativeMenu);
	}
};

// console.log("header");
