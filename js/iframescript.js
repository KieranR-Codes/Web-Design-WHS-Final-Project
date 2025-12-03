// This script was created by: 
	//Author: Kieran Rose
	//Date: 1/13/2025
	//Project: Final Project, Page 3 JavaScript, iframescript.js
	
//Function to make travrl button appear
function frameRefresh() {
	//Creates variables for the dropdown and website iFrame
	var siteSelect = document.getElementById("webselect");
	var webFrame = document.getElementById("frame");
	
	//Changes source for the iFrame to the new value selected
	webFrame.src = siteSelect.value;
}