$(document).ready(function() {
	$("#signupbut").click(function(event) {
		var gah = $("#sign-up-form").serialize();
		console.log(gah);
		alert("Sign Up Succesful!");
	});
});