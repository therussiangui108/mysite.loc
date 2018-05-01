$(document).ready(function() {
	$i = 1;
	$w = 0;

	$('.imgRangeArrow.right').click(function(event) {
		$('.otherButtons .txtInput').val(++$i);
	});
	$('.imgRangeArrow.left').click(function() {
		if ($i <= 1)
			return false;
		$('.otherButtons .txtInput').val(--$i);
	});
	$('.otherButtons .rangeButton').click(function() {
		//        alert('Success!'+$('.otherButtons .txtInput').val());
	});
	$('.slider_btn.right').click(function() {
		$('.slider_window .slider_slides').animate({
			'left': '-' + ($w += 1692) + 'px'
		}, 1000);
	});
	$('.slider_btn.left').click(function() {
		if ($w == 0)
			return false;
		$('.slider_window .slider_slides').animate({
			'left': '-' + ($w -= 1692) + 'px'
		}, 1000);
	});
	$('.minicenter_block.centertext .txt1').keyup(function(event) {
		if (event.which == 13) {
			$val = $('.minicenter_block.centertext .txt1').val();
			if ($val > 0) {
				$('.slider_window .slider_slides').animate({
					'left': '-' + ($w = 1692 * ($val - 1)) + 'px'
				}, 10000 * 0. + $val);
			}
		}
	});


	$otherFlag = 0;
	$otherFlag2 = 1;
	$('.hoverText.one').click(function() {
		if ($otherFlag == 0 || $otherFlag2 == 1) {
			$('.hiddenWindow').fadeIn(750);
			$('html').css({
				'paddingRight': '17px'
			});
			$('.hiddenBlock').css({
				'marginLeft': '0px'
			});
			$otherFlag = 1;
			$otherFlag2 = 0;
		}
	});

	$(document).keyup(function(event) {
		if (event.which == 27 && $otherFlag == 1) {
			$('html').css({
				'paddingRight': '0px'
			});
			$('.hiddenBlock').css({
				'marginLeft': '4px'
			});
			$('body').css({
				'overflow': 'visible'
			});
			$('.hiddenWindow').fadeOut(750);
			$otherFlag = 0;
		}
	});

	$('.commonText.closeButtonText').click(function() {
		if ($otherFlag2 == 0) {
			$('.hiddenWindow').fadeOut(750);
			$('html').css({
				'paddingRight': '0px'
			});
			$('.hiddenBlock').css({
				'marginLeft': '4px'
			});
			$otherFlag2 = 1;
			$otherFlag = 0;
		}
	});

	$flag = false;
	$('.arrowdown').click(function(event) {
		if ($flag) {
			$(this).css({
				'transform': 'rotate(0deg)',
				'transition': 'transform 1s'
			});
			$('.category').slideUp(750, function() {
				$('.mini_block.left.slide').css({
					'border-bottom-left-radius': '9px',
					'border-bottom-right-radius': '9px'
				});
			});
			$('.mini_block.left.slide, .category').css({
				'backgroundColor': 'rgba(255,255,255,0.5)',
				'transition': 'background-color 1s'
			});

			$flag = false;
		} else {
			$(this).css({
				'transform': 'rotate(180deg)',
				'transition': 'transform 1s'
			});
			$('.category').slideDown(750);
			$('.mini_block.left.slide').css({
				'border-bottom-left-radius': 0,
				'border-bottom-right-radius': 0
			});
			$('.mini_block.left.slide, .category').css({
				'backgroundColor': 'rgba(255,255,255,0.75)',
				'transition': 'background-color 1s'
			});

			$flag = true;
		}
	});
	$('.hoverText').click(function() {
		$('body').css({
			'overflow': 'hidden'
		});
	});
	$('.closeText').click(function() {
		$('body').css({
			'overflow': 'visible'
		});
	});
	$('.category li a').click(function() {
		$(this).parent().css({
			'backgroundColor': 'rgba(0,0,0,0.25)',
			'transition': 'background-color 0.50s'
		});
		setTimeout(function() {
			$('.category li').css({
				'backgroundColor': 'rgba(255,255,255,0)',
				'transition': 'background-color 0.50s'
			});
		}, 150);
	});

});
