$(function () {
	$('.header_bottom_btn').hover(
		function () {
			if (!($('.header_bottom_btn').hasClass('active'))) {
				$('.header_bottom_btn').addClass('hover');
			}
		},
		function () {
			$('.header_bottom_btn').removeClass('hover');
		}
	);

	$('.header_bottom_btn').click(function () {
		$(this).toggleClass('active');
		$(this).removeClass('hover');
		$('.header_hide').fadeToggle();
	});

	$('.header_hide a').click(function () {
		$('.header_bottom_btn').removeClass('active');
		$('.header_bottom_btn').removeClass('hover');
		$('.header_hide').fadeOut();
	});

	$('.header_hide_right').click(function () {
		if ($('.header_bottom_btn').hasClass('active')) {
			$('.header_bottom_btn').removeClass('active');
			$('.header_bottom_btn').removeClass('hover');
			$('.header_hide').fadeOut();
		}
	});

	$('.header_bottom_nav a').on('click', function () {
		let hrefElement = $(this).attr('href');
		let headerHeight = $('#header').outerHeight(true);
		let position = $(hrefElement).offset().top - headerHeight;
		$('body,html').animate({
			scrollTop: position
		}, 500);
		return false;
	});

	$('.header_nav a').on('click', function () {
		let hrefElement = $(this).attr('href');
		let headerHeight = $('#header').outerHeight(true);
		let position = $(hrefElement).offset().top - headerHeight;
		$('body,html').animate({
			scrollTop: position
		}, 500);
		return false;
	});

	$('.pagetop').click(function () {
		$("html,body").animate({scrollTop:0},"300");
	});

	$('.pagetop').hide();
    $(window).scroll(function () {
        if($(window).scrollTop() > 203) {
            $('.pagetop').slideDown(600);
        } else {
            $('.pagetop').slideUp(600);
        }
	});

	function fadeIn() {
		$('.fadeUpTrigger').each(function () {
			let scroll = $(window).scrollTop();
			let triTop = $(this).offset().top + 200;
			let winHeight = $(window).height();
			if (scroll >= triTop - winHeight) {
				$(this).addClass('fadeUp');
			} else {
				$(this).removeClass('fadeUp');
			}
		});
		$('.fadeLeftTrigger').each(function(){
			let scroll = $(window).scrollTop();
			let triTop = $(this).offset().top + 200;
			let winHeight = $(window).height();
			if (scroll >= triTop - winHeight){
			$(this).addClass('fadeLeft');
			}else{
			$(this).removeClass('fadeLeft');
			}
		});
		$('.fadeRightTrigger').each(function(){
			let scroll = $(window).scrollTop();
			let triTop = $(this).offset().top + 200;
			let winHeight = $(window).height();
			if (scroll >= triTop - winHeight){
			$(this).addClass('fadeRight');
			}else{
			$(this).removeClass('fadeRight');
			}
		});
	}

	$(window).scroll(function () {
		fadeIn();
	});

	const loadAnime = $('#load-animation');
	$(window).on('load', function () {
		loadAnime.delay(1500).fadeOut(1000);
	});
	function stopload(){
		loadAnime.delay(1000).fadeOut(700);
	}
	setTimeout('stopload()', 10000);
});