WebRTC.MeetingsRoute = Ember.Route.extend({
  model: function () {
    return this.get('store').find('meeting');
  }
});

 

 