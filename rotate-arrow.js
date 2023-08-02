document.querySelectorAll('.click-me').forEach(button => {
	button.addEventListener('click', () => {
			const arrow = button.querySelector('.arrow');
			arrow.classList.toggle('rotate');
	});
});
