$(document).ready(function() {
	$flag = true;

	$('.main_slider_button').click(function() {
		if ($flag) {
			$('.main_slider_click').slideDown();
			$('.main_slider_click').css({
				'background-color': 'rgba(255,255,255,1.00)',
				'transition': 'background-color 1s'
			});
			$('.main_slider').css({
				'background-color': 'rgba(255,255,255,1.00)',
				'border-bottom-left-radius': '0px',
				'border-bottom-right-radius': '0px',
				'transition': 'background-color 1s'
			});
			$flag = false;
		} else {
			$('.main_slider_click').slideUp(function() {
				$('.main_slider').css({
					'border-bottom-left-radius': '27px',
					'border-bottom-right-radius': '27px'
				});
			});
			$('.main_slider_click').css({
				'background-color': 'rgba(255,255,255,0.70)'
			});
			$('.main_slider').css({
				'background-color': 'rgba(255,255,255,0.70)'
			});
			$flag = true;
		}
	});

	$('.ul_main_slider li a').click(function() {
		$this = $(this);
		if ($this.parent().is(':last-child')) {
			setTimeout(function() {
				$this.parent().css({
					'border-bottom-left-radius': '27px',
					'border-bottom-right-radius': '27px',
					'background-color': 'rgba(0,0,0,0.50)',
					'transition': 'background-color 0.400s'
				});
			}, 1);
			setTimeout(function() {
				$this.parent().css({
					'border-bottom-left-radius': '27px',
					'border-bottom-right-radius': '27px',
					'background-color': 'rgba(255,255,255,1.00)',
					'transition': 'background-color 0.400s'
				});
			}, 200);
		} else {
			setTimeout(function() {
				$this.parent().css({
					'background-color': 'rgba(0,0,0,0.50)',
					'transition': 'background-color 0.400s'
				});
			}, 1);
			setTimeout(function() {
				$this.parent().css({
					'background-color': 'rgba(255,255,255,1.00)',
					'transition': 'background-color 0.400s'
				});
			}, 200);
		}


	});

});
