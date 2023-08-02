document.querySelectorAll('.click-me').forEach(button => {
	button.addEventListener('click', () => {
			button.classList.toggle('active');
	});
});
