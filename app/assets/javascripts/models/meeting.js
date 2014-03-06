// for more details see: http://emberjs.com/guides/models/defining-models/

WebRTC.Meeting = DS.Model.extend({
  performerName: DS.attr('string'),
  performerCountry: DS.attr('string'),
  duration: DS.attr('string'),
  time: DS.attr('date'),
  customerName: DS.attr('string'),
  description: DS.attr('string')
});
