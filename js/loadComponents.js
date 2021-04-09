console.log("Script loaded");

$("document").ready( function() {
	console.log("Document ready");

	// Show video controls when mouse enters the video window
	$(".pec_video").mouseenter( function() {
		console.log("Mouse enters video");
		$(this).attr('controls','true');
	});

	// Hide video controls when mouse leaves the video window
	$(".pec_video").mouseleave( function() {
		console.log("Mouse leaves video");
		$(this).removeAttr('controls');
	});
});