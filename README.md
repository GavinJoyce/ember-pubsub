# ember-pubsub

A simple pubsub mechanism for Ember.js

[![Build Status](https://travis-ci.org/GavinJoyce/ember-pubsub.svg?branch=master)](https://travis-ci.org/GavinJoyce/ember-pubsub)

Questions? Ping me [@gavinjoyce](https://twitter.com/gavinjoyce)

## Installation

This is an Ember CLI addon, to install:

`npm install ember-pubsub --save-dev`

## Usage Instructions

```javascript

// app/controllers/example.js
import Ember.Controller.extend({

	pubsub: Ember.inject.service(),

	setup: Ember.on('init', function() {
	    var pubsub = this.get('pubsub');

	    pubsub.subscribe('sayHello', this, function(name) {
  			console.log('hello ' + name);
		});
	}),

	actions: {
	    
	    hello: function() {
	        this.get('pubsub').publish('sayHello', 'Alex'); // => hello Alex
	    },

	    noMoreHellos: function() {
			this.get('pubsub').unsubscribe('sayHello');
	    }
	}
});


```

## Development Instructions

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Test
* `npm run test`
