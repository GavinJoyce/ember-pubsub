import Em from 'ember';
import PubSub from 'ember-pubsub/pubsub';

export default Em.ArrayController.extend({
  setup: function() {
    var pubsub = PubSub.create();

    pubsub.subscribe('red', this, function(data) {
      this.get('content').pushObject({ color: data.color });
    });
    pubsub.subscribe('blue', this, function(data) {
      this.get('content').pushObject({ color: data.color });
    });
    pubsub.subscribe('green', this, function(data) {
      this.get('content').pushObject({ color: data.color });
    });
    this.set('pubsub', pubsub);
  }.on('init'),
  actions: {
    publishColor: function(color) {
      this.get('pubsub').publish(color, { color: color });
    }
  }
});
