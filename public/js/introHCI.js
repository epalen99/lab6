'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	//AJAX endpoint
	$.get("/project/" + idNumber, callBackFn);
}

function callBackFn(result) {
	console.log(result);
	console.log("slowly....");
	console.log(result['id']);
	console.log('#' + result['id']);
	var idNum = result['id'];
	$('#project' + idNum).find('.thumbnail').find('.details').html(
		/*HTML START*/
	  	'<img src="' + result['image'] + '" class="detailsImage"></a>' +
	  	'<h3>' + result['title'] + '</h3>' +
		'<h4>' + result['date'] + '</h4>' +
		'<p>' + result['summary'] + '</p>'
		); /*HTML END*/
/* 
	var projectID = result['id'];
	console.log(projectID);
	$('.details', result['id']).html(<p>what goes on lmao</p>); */
	
}

/*idk what this is*/
/* function addProject(result) {
	var projectHTML = '<a href="#" class="thumbnail">' +
	  '<img src="' + result['image'] + '" class="img">' +
	  '<p>' + result['title'] + '</p>' +
	  '<p><small>' + result['date'] +
	  '</small></p></a>';
  } */
