// establish a function called "shower" which uses "susGrabber" as a parameter
function shower(susGrabber){
	// "susGrabber" is defined as a changer of the "sus" id'd elements in the index page
	document.getElementById("sus").innerHTML = susGrabber;
}
// establish a function called "susSayer" that uses a callback function as a fill in
function susSayer(callback) {
	const sus = "sus";
	// callback uses and returns the string "sus"
	callback(sus);
}
// use the function, "susSayer", and use "shower" to fill in for the callback function; this allows "shower" to use "sus" as the parameter in its function to change the contents of the "sus" id'd elements (in this case, a paragraph element).
susSayer(shower);
