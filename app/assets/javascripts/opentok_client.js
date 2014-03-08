$('document').ready(function(){
	if($("#call_id").length > 0)
	{
	var apiKey    = "44680922";
	var sessionId = "2_MX40NDY4MDkyMn5-RnJpIE1hciAwNyAwNDozNzo0NyBQU1QgMjAxNH4wLjAwNjUzNzI1ODZ-";
	var token     = "T1==cGFydG5lcl9pZD00NDY4MDkyMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz1jNGE4YWNhMzI1MmMyMDdlMzE1OWFmZTBlZjFhYzBlNmExY2I4MjZlOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9Ml9NWDQwTkRZNE1Ea3lNbjUtUm5KcElFMWhjaUF3TnlBd05Eb3pOem8wTnlCUVUxUWdNakF4Tkg0d0xqQXdOalV6TnpJMU9EWi0mY3JlYXRlX3RpbWU9MTM5NDE5NTg5NSZub25jZT0wLjM0MTk0ODU4MjM0NzE4OTk0JmV4cGlyZV90aW1lPTEzOTY3ODc4NjAmY29ubmVjdGlvbl9kYXRhPQ==";
  var duration = $("#session_duration").data("duration")
  var performer_name  = $("#session_performer_name").data("performer-name")
  
  

	if($("#customer_video").length < 0)
	{
	function sessionConnectedHandler (event) {
		session.publish( publisher)
		subscribeToStreams(event.streams);
		$('#countdown').timeTo({
		seconds: duration*60,
		countdown: true
	},function(){ 
		opentok_client_hangup(session);
	});
	$("#hangup_button").click(function(){
		opentok_client_hangup(session)	
	});				
	}
	} 
	
	if($("#customer_video").length > 0)
	{
		function subscribeToStreams(streams) {	
			for (var i = 0; i < streams.length; i++) {
				var stream = streams[i];
				if (stream.connection.connectionId
						!= session.connection.connectionId) {
							session.subscribe(stream,"myPublisher",{width: 500, height: 400});
						}
			}	
		}
		function streamCreatedHandler(event) {
			subscribeToStreams(event.streams);
		}
	}

	var publisher = TB.initPublisher(apiKey,"myPublisher",{width: 500, height: 400,name: performer_name});
	var session   = TB.initSession(sessionId);

	session.connect(apiKey, token);
	session.addEventListener("sessionConnected", sessionConnectedHandler);

	session.addEventListener("streamCreated",	streamCreatedHandler);
	}
	});
function opentok_client_hangup(session)
{
	session.disconnect();
	$("#countdown").timeTo("stop");
}
