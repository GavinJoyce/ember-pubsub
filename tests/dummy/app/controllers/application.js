import Ember from 'ember';

export default Ember.Controller.extend({

    pubsub: Ember.inject.service(),

    setup: Ember.on('init', function() {
        var pubsub = this.get('pubsub');

        pubsub.subscribe('red', this, function(data) {
            this.get('log').pushObject({
                color: data.color
            });
        });
        pubsub.subscribe('blue', this, function(data) {
            this.get('log').pushObject({
                color: data.color
            });
        });
        pubsub.subscribe('green', this, function(data) {
            this.get('log').pushObject({
                color: data.color
            });
        });

        this.set('log', Ember.A([]));
    }),

    log: null,

    actions: {
        publishColor: function(color) {
            this.get('pubsub').publish(color, {
                color: color
            });
        }
    }
});