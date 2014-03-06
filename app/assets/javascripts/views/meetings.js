// for more details see: http://emberjs.com/guides/views/

WebRTC.MeetingsView = Ember.View.extend({
  templateName: 'meetings'
});

WebRTC.StartView = Ember.View.extend({
  click: function(evt) {
    twilio_client_call();
  }
});

WebRTC.StopView = Ember.View.extend({
  click: function(evt) {
    alert("ClickableView was clicked!");
  }
});

