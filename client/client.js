Meteor.startup(function(){
	$(document).ready(function() {
    	$('.dropdown-menu').dropdown()
	});

	!function ($) {
		$(document).on('click.bootstrap-toggle', '[data-toggle^=toggle]', function(e) {
			var $toggle = $(this);
			var $input = $(this).find('input[type=checkbox]');
			if ($toggle.hasClass('off')) {
				$toggle.attr('class', 'toggle ' + $toggle.find('.toggle-on').attr('class').replace(/toggle-on/g,''))
				$input.prop('checked', true);
				$toggle.removeClass('off');
			} else {
				$toggle.attr('class', 'toggle ' + $toggle.find('.toggle-off').attr('class').replace(/toggle-off/g,''))
				$input.prop('checked', false);
				$toggle.addClass('off');
			}
		});
	}(window.jQuery);
});