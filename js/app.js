$(function() {
	$(document).ready(function() {
		$(".loader").fadeOut(3000, function() {
			$(".whole-body").animate(
				{
					opacity: 1
				},
				200,
				function() {
					var headerText = document.querySelector(".header-text");
					var headerImg = document.querySelector(".header-img");
					headerImg.classList.add("animated", "bounceInRight");
					headerText.classList.add("animated", "bounceInLeft");
				}
			);
		});
	});
	//owl carousel display
	$("#owl-carousel-offers").owlCarousel({
		loop: true,
		margin: 40,
		autoplay: true,
		navigation: false,
		responsiveClass: false,
		nav: true,
		autoplayTimeout: 3000,
		responsive: true,
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	$("#owl-carousel-clients").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		navigation: false,
		responsiveClass: false,
		nav: true,
		autoplayTimeout: 3000,
		responsive: true,
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	$(window).scroll(function() {
		var scrollAmount = $(this).scrollTop();
		//console.log(scrollAmount);
		const aboutImgSection = document.querySelector("#about-img");
		const aboutTextSection = document.querySelector("#about-text");
		if (scrollAmount > 300) {
			aboutImgSection.classList.add("animated", "bounceInRight");
			aboutTextSection.classList.add("animated", "bounceInLeft");
		}
		var footerImg = document.querySelector(".footer-img");
		var footerContent = document.querySelector(".footer-content");
		if ($(window).scrollTop() > 3500) {
			footerImg.classList.add("animated", "bounceInRight");
			footerContent.classList.add("animated", "bounceInLeft");
		}
		//window scroll
		if ($(window).scrollTop() > 1000) {
			$(".scroll-icon").fadeIn(400);
		} else {
			$(".scroll-icon").fadeOut(400);
		}
	});
	//click to scroll to top
	$(".scroll-icon").click(function() {
		$("body,html").animate(
			{
				scrollTop: 0
			},
			1000
		);
	});

	$("#carousel").waterwheelCarousel({
		flankingItems: 1,
		keyboardNav: true,
		edgeFadeEnabled: true,
		separationMultiplier: 0
	});

	var carousel = $("#carousel").waterwheelCarousel();
	$("#next-project").click(function() {
		carousel.next({
			flankingItems: 0,
			keyboardNav: true,
			edgeFadeEnabled: true,
			separationMultiplier: 0
		});
	});

	$("#prev-project").click(function() {
		carousel.prev({
			flankingItems: 0,
			keyboardNav: true,
			edgeFadeEnabled: true,
			separationMultiplier: 0
		});
	});

	//##################################################
});
