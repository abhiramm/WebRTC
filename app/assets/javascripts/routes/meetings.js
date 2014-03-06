WebRTC.MeetingsRoute = Ember.Route.extend({
  model: function () {
    return this.get('store').find('meeting');
  }
});

 WebRTC.MeetingsNewRoute = Ember.Route.extend({
  model: function () {
    return WebRTC.Meeting.createRecord({performerName: '', performerCountry: '', customerName: '', duration: '', time: '', description: '' });
  },
  actions: {
    save: function () {
    this.get('store').commit();
    this.transitionTo('meetings');
  },
  
  cancel: function() {
  //  this.stopEditing();
    this.transitionTo('meetings');
  }
}
});


 