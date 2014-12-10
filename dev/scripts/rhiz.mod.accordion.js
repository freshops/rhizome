RHIZ.register(function() {
	
	'use strict';
	
	var $order = $('#order');
	if ($order.length) {
		
		$order.click(function($e) {
			
			$e.preventDefault();
			
			$order.children('ul').animate({
				opacity: 'toggle',
				height: 'toggle',
				speed: 'slow'
			});
			
		});
		
	}
	
	// https://github.com/albertedevigo/dcjqaccordion
	$('#menu > ul')
		.on('click', 'a', function() {
			
			// Remove active link styles after click:
			$(this).blur();
			
		})
		.dcAccordion({
			eventType: 'click',
			autoClose: true,
			saveState: true,
			disableLink: true,
			speed: 'fast'
		});
	
}); // RHIZ
