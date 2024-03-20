$(function() {

	var header = $("#header"),
		headH = header.height(),
		mainH = $("#main").innerHeight() - headH,
		scrollOffset = $(window).scrollTop();


	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});


	function checkScroll(scrollOffset) {
		if(scrollOffset >= mainH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	};


	/* Smooth Scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data("scroll"),
			blockOffset = $(blockId).offset().top;   /* получение верхней координаты - blockOffset искомого блока */

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({		/* плавный переход к блоку */
			scrollTop: blockOffset - headH
		}, 500)							/* продолжительность анимации в милисекундах */


		header.removeClass("active");
		$("#nav").removeClass("active");
		$("#nav a").removeClass("active");
		$("#nav_toggle").removeClass("active");
	});


	/* Menu Nav Toggle*/
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();			/* убираем стандартное поведение кнопки*/

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
		header.toggleClass("active");
	});


});