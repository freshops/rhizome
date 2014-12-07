// // Cookies:
// var cookie_menu = 'freshops_menu';
// var cookie_path = '/';
// var cookie_domain = 'freshops.com';	

// function set_cookie(cookie, val) {
// 	$.cookie(cookie, val, { path: cookie_path, domain: cookie_domain }); // set cookie.
// }

// function kill_cookie(cookie) {
// 	$.cookie(cookie, null, { path: cookie_path, domain: cookie_domain }); // Delete menu cookie.	
// }

$(function() {
	
	// Master object referneces:
	// var $rel_external = $('a[rel$="external"]'); // New window links.
	// var $order = $('#order'); // Order button.
	// var $menu = $('menu > ul'); // Main navigation.
	
	// Other:
	var $options = { opacity: 'toggle', height: 'toggle', speed: 'slow' };
	// var speed_01 = 500;
	// var speed_02 = 800;
	// var speed_03 = 5000;
	
	// Handle "_blank" links:
	// if($rel_external.length > 0) {
	// 	$rel_external.click(function() { this.target = "_blank"; });
	// }
	
	var $order = $('#order');
	if ($order.length) {
		
		$order.click(function() {
			
			$order.children('ul').animate($options);
			
		});
		
	}
	
	var $menu = $('#menu > ul');
	if ($menu.length) {
		
		// var menu_id = '#menu';
		// var menu_type = 'ul';
		// var menu_clicker = 'a';
		// var ignore_cookie_rel = 'no-cookie';
		// var $menu_ele = $(menu_id + ' > ' + menu_type + ' ' + menu_type);
		// var $menu_fire = $(menu_id + ' > ' + menu_type + ' ' + menu_clicker);
		
		//$menu_ele.hide();
		
		// if($.cookie(cookie_menu)) {
		// 	var $check_ele_cookie = $('#' + $.cookie(cookie_menu)).next();
		// 	if(($check_ele_cookie.is(menu_type)) && (!$check_ele_cookie.is(':visible'))) {
		// 		$(menu_type + menu_id + ' ' + menu_type + ':visible').hide(); // Hide all other sub-menu items.
		// 		$check_ele_cookie.show(); // Show the cookie one.
		// 	}
		// }
		
		$menu.on('click', 'a', function($event) {
			
			var $this = $(this);
			var $next = $this.next('ul');
			
			if ($next.length) {
				
				$event.preventDefault(); // Cancel link functionality if the immediately following sibling is an unordered list.
				
				$next.animate($options);
				
			}
			
			//var ignore_cookie = this.rel;
			//var click_id = this.id;
			// var $check_ele = $(this).next(); // Needs to be $(this)... Do not use "$menu_fire".
			// if(($check_ele.is(menu_type)) && ($check_ele.is(':visible'))) {
			// 	//$.cookie(cookie_menu, null, { path: cookie_path, domain: cookie_domain }); // Delete menu cookie.
			// 	if(ignore_cookie != ignore_cookie_rel) { kill_cookie(cookie_menu); }
			// 	$check_ele.animate($anim_options_01, speed_02); // Hide if one clicked is open.
			// 	this.blur();
			// 	return false;
			// }
			// if(($check_ele.is(menu_type)) && (!$check_ele.is(':visible'))) {
			// 	//$.cookie(cookie_menu, click_id, { path: cookie_path, domain: cookie_domain }); // set cookie.
			// 	if(ignore_cookie != ignore_cookie_rel) { set_cookie(cookie_menu, click_id); }
			// 	$(menu_type + menu_id + ' ' + menu_type + ':visible').animate($anim_options_01, speed_01); // Hide all other sub-menu items.
			// 	$check_ele.animate($anim_options_01, speed_02); // Show the clicked one.
			// 	this.blur();
			// 	return false;
			// }
		});

		// Sub-sub-menus:
		// $('ul#menu li ul > li').click(function() {
		// 	$('ol', this).animate($anim_options_01);
		// });
		
	}
	
});
