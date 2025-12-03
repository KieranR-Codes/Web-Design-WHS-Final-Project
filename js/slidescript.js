
// This script was created by: 
	//Author: Kieran Rose
	//Date: 1/5/2025
	//Project: Final Project, Page 2 JavaScript, slidescript.js
	
//Creates index variables to sync the selected image
var gd1Index = 1;
var gd2Index = 1;
var dp1Index = 1;

//Calls the functions to show the default selected image
showgd1Divs(gd1Index);
showgd2Divs(gd2Index);
showdp1Divs(dp1Index);

//Functions to add or remove 1 from the index variable

//Graphic Design 1
function plusgd1Divs(n) {
	//Calls showDivs function to update the image and text
	showgd1Divs(gd1Index += n);
}

//Graphic Design 2
function plusgd2Divs(n) {
	//Calls showDivs function to update the image and text
	showgd2Divs(gd2Index += n);
}

//Digital Photography 1
function plusdp1Divs(n) {
	//Calls showDivs function to update the image and text
	showdp1Divs(dp1Index += n);
}


//Function that update the image and text (Graphic Design 1)
function showgd1Divs(n) {
	
	//Creates variables for text and image
	var i;
	var img = document.getElementsByClassName("gd1-slideimg");
	var txt = document.getElementsByClassName("gd1-text");
	
	//Updates Index to next image
	if (n > img.length) {gd1Index = 1}
	if (n < 1) {gd1Index = img.length}
	for (i = 0; i < img.length; i++) {
		//Sets deselected images to not display
		img[i].style.display = "none";
		txt[i].style.display = "none";
	}
	//Sets selected image to display
	img[gd1Index-1].style.display = "block";
	txt[gd1Index-1].style.display = "block";
}

//Function that update the image and text (Graphic Design 2)
function showgd2Divs(n) {
	
	//Creates variables for text and image
	var i;
	var img = document.getElementsByClassName("gd2-slideimg");
	var txt = document.getElementsByClassName("gd2-text");
	
	//Updates Index to next image
	if (n > img.length) {gd2Index = 1}
	if (n < 1) {gd2Index = img.length}
	for (i = 0; i < img.length; i++) {
		//Sets deselected images to not display
		img[i].style.display = "none";
		txt[i].style.display = "none";
	}
	//Sets selected image to display
	img[gd2Index-1].style.display = "block";
	txt[gd2Index-1].style.display = "block";
}

//Function that update the image and text (Digital Photography 1)
function showdp1Divs(n) {
	
	//Creates variables for text and image
	var i;
	var img = document.getElementsByClassName("dp1-slideimg");
	var txt = document.getElementsByClassName("dp1-text");
	
	//Updates Index to next image
	if (n > img.length) {dp1Index = 1}
	if (n < 1) {dp1Index = img.length};
	for (i = 0; i < img.length; i++) {
		//Sets deselected images to not display
		img[i].style.display = "none";
		txt[i].style.display = "none";
	}
	//Sets selected image to display
	img[dp1Index-1].style.display = "block";
	txt[dp1Index-1].style.display = "block";
}