import Em from 'ember';
import PubSub from 'ember-pubsub/pubsub';

export default Em.ArrayController.extend({
  setup: function() {
    var pubsub = PubSub.create();
    var self = this;
    pubsub.subscribe('red', function(data) {
      self.get('content').pushObject({ color: data.color });
    });
    pubsub.subscribe('blue', function(data) {
      self.get('content').pushObject({ color: data.color });
    });
    pubsub.subscribe('green', function(data) {
      self.get('content').pushObject({ color: data.color });
    });
    this.set('pubsub', pubsub);
  }.on('init'),
  actions: {
    publishColor: function(color) {
      this.get('pubsub').publish(color, { color: color });
    }
  }
});
