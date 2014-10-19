import Em from 'ember';

var PubSub = Em.Object.extend(Em.Evented, {
  publish: function() {
    return this.trigger.apply(this, arguments);
  },
  subscribe: function() {
    return this.on.apply(this, arguments);
  },
  unsubscribe: function() {
    return this.off.apply(this, arguments);
  }
});

export default PubSub;
