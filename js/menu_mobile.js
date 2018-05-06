$(document).ready(function() {
	$flag_2 = true;

	$('.main_slider_button').click(function() {
		if ($flag_2) {
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
			$flag_2 = false;
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
			$flag_2 = true;
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
					'transition': 'background-color 0.050s'
				});
			}, 1);
			setTimeout(function() {
				$this.parent().css({
					'border-bottom-left-radius': '27px',
					'border-bottom-right-radius': '27px',
					'background-color': 'rgba(255,255,255,1.00)',
					'transition': 'background-color 0.050s'
				});
			}, 100);
		} else {
			setTimeout(function() {
				$this.parent().css({
					'background-color': 'rgba(0,0,0,0.50)',
					'transition': 'background-color 0.050s'
				});
			}, 1);
			setTimeout(function() {
				$this.parent().css({
					'background-color': 'rgba(255,255,255,1.00)',
					'transition': 'background-color 0.050s'
				});
			}, 100);
		}


	});

});
