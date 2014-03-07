WebRTC.NewMeetingsRoute = Ember.Route.extend({
  model: function () {
    return WebRTC.Meeting.createRecord();
  //  return this.store.createRecord('post');
  },
  actions: {
    save: function () {
    this.get('store').commit();
    this.transitionTo('meetings');
    this.transaction = null;
  },
  
  cancel: function() {
  //  this.stopEditing();
    this.transitionTo('meetings');
  }
}
});



