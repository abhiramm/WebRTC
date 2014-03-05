WebRTC.MeetingController= Ember.ObjectController.extend({
cancel: function() {
    this.stopEditing();
    this.transitionToRoute('meetings');
  }
});