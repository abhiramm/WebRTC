WebRTC.MeetingsRoute = Ember.Route.extend({
  model: function () {
    //return this.get('store').find('meeting');
    return this.store.find('meeting');
  }
  
});

 

 