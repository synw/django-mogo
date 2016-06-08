function fire_request(container_id, url) { 
    var container = '#'+container_id;
	$(container).html('<br /><br /><br /><i class="fa fa-spinner fa-4x fa-spin"></i><br /><br /><br />');
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
