// Cookies:
var cookie_menu = 'freshops_menu';
var cookie_path = '/';
var cookie_domain = 'freshops.com';	

function set_cookie(cookie, val) {
	$.cookie(cookie, val, { path: cookie_path, domain: cookie_domain }); // set cookie.
}

function kill_cookie(cookie) {
	$.cookie(cookie, null, { path: cookie_path, domain: cookie_domain }); // Delete menu cookie.	
}

$(function() {
	
	// Master object referneces:
	var $rel_external = $('a[rel$="external"]'); // New window links.
	var $order = $('#order'); // Order button.
	var $tabs = $('.tabs div'); // Tabs.
	var $menu = $('ul#menu'); // Main navigation.
	
	// Other:
	var $anim_options_01 = { opacity: 'toggle', height: 'toggle', speed: 'slow' };
	var speed_01 = 500;
	var speed_02 = 800;
	var speed_03 = 5000;
	
	// jQuery UI tabs:
	if($tabs.length > 0) {
		/* http://jqueryui.com/demos/tabs/ */
		var tabs_options = { cookie: {} };
		$tabs.tabs(); // Initialize.
	} // $tabs
	
	// Handle "_blank" links:
	if($rel_external.length > 0) {
		/* target="_foo" is invalid due to our DTD.
		** If you want the link to open in a new window, add attribute "rel="external"". */
		$rel_external.click(function() { this.target = "_blank"; });
	} // $rel_external
	
	// Hoverintent: http://cherne.net/brian/resources/jquery.hoverIntent.html
	if ($order.length > 0) {
		var $order_ul = $('#order ul');
		$order.hoverIntent({
			over: function() { $order_ul.animate($anim_options_01); },
			timeout: 250,
			out: function() { $order_ul.animate($anim_options_01); }
		});
	} // $order
	
	/* 
	** Initialize the menu: */
	if($menu.length > 0) {
		var menu_id = '#menu';
		var menu_type = 'ul';
		var menu_clicker = 'a';
		var ignore_cookie_rel = 'no-cookie';
		var $menu_ele = $(menu_type + menu_id + ' ' + menu_type);
		var $menu_fire = $(menu_type + menu_id + ' ' + menu_clicker);
		$menu_ele.hide();
		if($.cookie(cookie_menu)) {
			var $check_ele_cookie = $('#' + $.cookie(cookie_menu)).next();
			if(($check_ele_cookie.is(menu_type)) && (!$check_ele_cookie.is(':visible'))) {
				$(menu_type + menu_id + ' ' + menu_type + ':visible').hide(); // Hide all other sub-menu items.
				$check_ele_cookie.show(); // Show the cookie one.
			}
		}
		$menu_fire.click(function() {
			var ignore_cookie = this.rel;
			var click_id = this.id;
			var $check_ele = $(this).next(); // Needs to be $(this)... Do not use "$menu_fire".
			if(($check_ele.is(menu_type)) && ($check_ele.is(':visible'))) {
				//$.cookie(cookie_menu, null, { path: cookie_path, domain: cookie_domain }); // Delete menu cookie.
				if(ignore_cookie != ignore_cookie_rel) { kill_cookie(cookie_menu); }
				$check_ele.animate($anim_options_01, speed_02); // Hide if one clicked is open.
				this.blur();
				return false;
			}
			if(($check_ele.is(menu_type)) && (!$check_ele.is(':visible'))) {
				//$.cookie(cookie_menu, click_id, { path: cookie_path, domain: cookie_domain }); // set cookie.
				if(ignore_cookie != ignore_cookie_rel) { set_cookie(cookie_menu, click_id); }
				$(menu_type + menu_id + ' ' + menu_type + ':visible').animate($anim_options_01, speed_01); // Hide all other sub-menu items.
				$check_ele.animate($anim_options_01, speed_02); // Show the clicked one.
				this.blur();
				return false;
			}
		});
		// Sub-sub-menus:
		$('ul#menu li ul > li').hoverIntent({
			over: function() {
				$('ol', this).animate($anim_options_01);
			},
			timeout: 250,
			out: function() {
				$('ol', this).animate($anim_options_01);
			}
		});
	} // $menu
	
	/*
	** Custom Fragment to check all the anchors on the page, and change the behavior of any that link to a tab, to open it.
	** Note that this skips the actual tabs on a page, so their behavior is not affected
	** http://fragmentedthought.com/code-fragment/jquery-ui-tabs-extending-tab-behavior-anchor-links
	*/
	$('a[href]').each(function() {
		if (this.hash) {
			if ($(this.hash + '.ui-tabs-panel').length > 0 && $(this).parents('div.ui-tabs').length == 0 ) {
				var link = this.href.replace(this.hash, '');
				var page = window.location.href.replace(window.location.hash, '');
				if (link === page || link === '') {
					this.onclick = function() {
						$tabs.tabs('select', this.hash);
						//return false;
					}
				}
			}
		}
	}); 
	
});
// End closure.
