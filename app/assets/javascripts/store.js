// http://emberjs.com/guides/models/using-the-store/

WebRTC.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
 // adapter: '_ams'
  revision: 11,
  adapter: DS.RESTAdapter.create()
});


