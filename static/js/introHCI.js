'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
function projectClick(e) { 
	    var containingProject = $(this).closest(".project");
    	var description = $(containingProject).find(".project-description");
    	if (description.length == 0) {
       	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    	} else {
       	$(".project-description").fadeOut();
       	//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
}
	// e.preventDefault();
 // 	$(this).css("background-color", "#7fff00");


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$(".jumbotron p").addClass("active");
		$("#testjs").text("Please wait...");
		$("#testjs").toggleClass("active");

	});
	$("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}