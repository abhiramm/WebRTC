$(document).ready(function(){
	var twilio_token = $("#twilio_client_token").data("token-id") 
	var twilio_client_name = $("#twilio_client_name").data("client-name") 
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%5")
	console.log(twilio_token)
	Twilio.Device.setup(twilio_token, {debug: true});
	/* Let us know when the client is ready. */
	Twilio.Device.ready(function (device) {
		$("#log").text("Client "+twilio_client_name+" is ready");
	});
	/* Report any errors on the screen */
	Twilio.Device.error(function (error) {
		$("#log").text("Error: " + error.message);
	});
	Twilio.Device.connect(function (conn) {
		$("#log").text("Successfully established call");
	});
	Twilio.Device.disconnect(function (conn) {
		$("#log").text("Call ended");
	});
	Twilio.Device.incoming(function (conn) {
		$("#log").text("Incoming connection from " + conn.parameters.From);
		// accept the incoming connection and start two-way audio
		conn.accept();
	});
	/* Connect to Twilio when we call this function. */

});


function twilio_client_call() {
	// get the phone number or client to connect the call to
	params = {"PhoneNumber": $("#number").val()};
	Twilio.Device.connect(params);
}
function twilio_client_hangup() {
	Twilio.Device.disconnectAll();
}

