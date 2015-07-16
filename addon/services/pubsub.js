import Ember from 'ember';

var PubSub = Ember.Service.extend(Ember.Evented, {
	
	publish: function() {
		return this.trigger.apply(this, arguments);
	},

	subscribe: function() {
		return this.on.apply(this, arguments);
	},

	subscribeOnce: function() {
		return this.one.apply(this, arguments);
	},

	unsubscribe: function() {
		return this.off.apply(this, arguments);
	},

	isSubscribed: function(){
		return this.has.apply(this, arguments);	
	}
});

export default PubSub;