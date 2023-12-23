	// yoo
	YooZoom(
		document.querySelectorAll(".yoo-zoom"),    //zoom container
		2,    // zoom scale (recommended 2)
	);

	function YooZoom(zContainer, zScale) {
		if (zScale > 1) {
			zContainer.forEach(countainer => {

				// get zoom-in on hover
				countainer.addEventListener("mousemove", (e) => {
					let zImg = countainer.querySelector('.yoo-zoom-img');
					let xAxis = e.pageX - countainer.getBoundingClientRect().left - countainer.getBoundingClientRect().width / 2;
					let yAxis = e.pageY - countainer.getBoundingClientRect().top - window.pageYOffset - countainer.getBoundingClientRect().height / 2;
					zImg.style.transform = 'translate(' + -xAxis * (zScale - 1) + 'px,' + -yAxis * (zScale - 1) + 'px) scale(' + zScale + ')';
					zImg.style.opacity = 1;
				});
				// get back zoom-out on hover out
				countainer.addEventListener("mouseout", (e) => {
					let zImg = countainer.querySelector('.yoo-zoom-img');
					zImg.style.transform = `translate(0) scale(1)`;
					zImg.style.opacity = 0;
				});
			});
		}
	}