(function($) {

	//takes a string of id1|id2|id3 and returns corresponding IDs (prepends a #)
	var parseTargets = function(string) {
		return $.map(string.split('|'),function (x) {
			return '#'+$.trim(x);
		});
	}

	//include radio buttons of the same name in the set of triggernig elements.
	var getShowBindingElements = function(show_targets) {
		var binding_elements = $(show_targets);
		$(show_targets).each(function () {
			if($(this).attr('type') == 'radio') {
				//get the name and bind the handler to all the radiobuttons
				//with the same name
				var radio_name = $(this).attr('name');
				//console.log ('radio:' + radio_name);
				binding_elements = binding_elements.add('[name="'+radio_name+'"]');
			}
		});
		return binding_elements;
	};

	//maybe I'll make these animate one day.
	// maybe slide across for span and slide down for div?
	var showSpan = function(elem) {
		$(elem).show();
	};

	var hideSpan = function(elem) {
		$(elem).hide();
	};
	var showDiv = function(elem) {
		$(elem).show();
	};
	var hideDiv = function(elem) {
		$(elem).hide();
	};

	var isDiv = function(elem) {
		return -1 !== $.inArray($(elem).css('display'), ['block', 'table']);
	};

	//register handlers for when any dependant element changes.
	var registerShowBinding = function(binding_elements, show_controllers, show_target) {
		binding_elements.change(function() {
			var isOn = false;
			//if at least one of show_controllers is true.
			$(show_controllers).each(function() {
				if ($(this).is(':checked')) {
					isOn = true;
					return false; //break
				}
			});
			if (isOn) {
				isDiv(show_target) ? showDiv(show_target) : showSpan(show_target);
			}
			else {
				isDiv(show_target) ? hideDiv(show_target) : hideSpan(show_target);
			}
		}).change(); //fire the first time.

			
	};

	//register a binding for change of focus.
	var registerFocusBinding = function(binding_element, focus_target) {
		binding_element.change(function() {
			if (binding_element.is(':checked')) {
				focus_target.focus();
			}
		}); //Don't actually call this yet, no point stealing focus before it's been allocated.
	};

	//the main function, does all the processing.
	$.fn.showHide = function() {
		//prep all elements that should show/hide
		$(this).find('[data-show]').each(function(idx) {
			var targets = parseTargets($(this).attr('data-show'));
			var show_controllers = $(targets.join(','));
			console.log(show_controllers);
			if (!(show_controllers.length)) { //empty
				return true; //continue loop
			}

			var binding_elements = getShowBindingElements(show_controllers);
			registerShowBinding(binding_elements, show_controllers, $(this));
		});
		//prep all elements that should auto-focus
		$(this).find('[data-focus]').each(function(idx) {
			var show_controller = $('#'+$(this).attr('data-focus'));
			
			if (!(show_controller.length)) { //empty
				return true; //continue loop
			}

			registerFocusBinding(show_controller,$(this));

		});
	};
})(jQuery);