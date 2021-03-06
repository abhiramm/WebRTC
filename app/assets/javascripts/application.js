// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require twilio_client
//= require opentok_client
//= require jquery.timeTo
//= require handlebars
//= require ember
//= require ember-data
//= require bootstrap-datetimepicker
//= require_self
//= require web_rtc
//= require add

// for more details see: http://emberjs.com/guides/application/
WebRTC = Ember.Application.create({LOG_TRANSITIONS: true});

