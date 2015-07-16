import {
	moduleFor, test
}
from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:pubsub', 'Unit | Service | pubsub', {
	// Specify the other units that are required for this test.
	// needs: ['service:foo']
});

var service;

// Replace this with your real tests.
test('it exists', function(assert) {
	service = this.subject();
	assert.ok(service);
});

test('it subscribes and publishes', function(assert) {
	return new Ember.RSVP.Promise(function(resolve, reject) {
		var shouldBeResolved;
		service.subscribe('test-event-1', this, function(data) {
			shouldBeResolved = data.test === 'ok';
		});
		service.publish('test-event-1', {test: 'ok'});

		window.setTimeout(function(){
			if (typeof shouldBeResolved === 'undefined'){
				assert.ok(false, 'callback was not called on publish');
				reject();
			} else if (shouldBeResolved){
				assert.ok(true);
				resolve();
			} else {
				assert.ok(false, 'publish payload is not what it should be');
				reject();	
			}
		}, 1000);
	});

});

test('it unsubscribes', function(assert) {
	return new Ember.RSVP.Promise(function(resolve, reject) {
		var shouldBeRejected;

		service.subscribe('test-event-2', this, function(data) {
			shouldBeRejected = data.test === 'ok';
		});
		service.unsubscribe('test-event-2');
		service.publish('test-event-2', {test: 'ok'});

		window.setTimeout(function(){
			if (shouldBeRejected) {
				assert.ok(false, 'callback was called on publish despite unsubscribe');
				reject();
			} else {
				assert.ok(true);
				resolve();	
			}
		}, 1000);
	});

});

test('it subscibes once', function(assert) {
	return new Ember.RSVP.Promise(function(resolve, reject) {
		var shouldBeResolved;

		service.subscribeOnce('test-event-3', this, function(data) {
			shouldBeResolved = data.test !== 'notOk';
		});
		
		service.publish('test-event-3', {test: 'ok'});
		service.publish('test-event-3', {test: 'notOk'});

		window.setTimeout(function(){
			if (shouldBeResolved) {
				assert.ok(true);
				resolve();	
			} else {
				assert.ok(false, 'callback was called on publish despite unsubscribe');
				reject();
			}
			
		}, 1000);

	});

});