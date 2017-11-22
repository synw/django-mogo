function fire_request(container_id, url) { 
    var container = '#'+container_id;
	$(container).html('<div class="gc gus-l gds-l"><i class="fa fa-spinner fa-4x fa-spin"></i></div>');
	$.ajax({
		type: "GET",
		dataType: "html",
		url: url,
		success: function (content) {
			$(container).html(content);
			},
		error: function(xhr, textStatus, errorThrown) {
	        console.log("Error: "+errorThrown+xhr.status+xhr.responseText);
	        }
    	});
	}
function toggle_from_selector(selector) {
	$(selector).slideToggle('fast');
}
function toggleMenu() {
	$('#popup_menu').slideToggle('fast');
}
function closeMenu() {
	$('#popup_menu').hide();
}
function handleMenuClick() {
	toggleMenu();
	gotoContent();
}
function setClass(elem, classname) {
	$(elem).addClass(classname);
}
function removeClass(elem, classname) {
	$(elem).removeClass(classname);
}
function swapClass(elem, old_classname, classname) {
	console.log(old_classname, classname,elem);
	$(elem).addClass(classname);
	$(elem).removeClass(old_classname);
}