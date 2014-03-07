// For more information see: http://emberjs.com/guides/routing/

WebRTC.Router.map(function() {
  // this.resource('posts');
     this.resource('meetings', function(){
        this.route('new');
        
    });
    this.resource('new_meetings');
});
