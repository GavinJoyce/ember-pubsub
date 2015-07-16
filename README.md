# ember-pubsub

[![Build Status](https://travis-ci.org/GavinJoyce/ember-pubsub.svg?branch=master)](https://travis-ci.org/GavinJoyce/ember-pubsub)
[![npm version](https://badge.fury.io/js/ember-pubsub.svg)](http://badge.fury.io/js/ember-index)
[![Ember Observer Score](http://emberobserver.com/badges/ember-pubsub.svg)](http://emberobserver.com/addons/ember-pubsub) 

A simple pubsub mechanism for Ember.js

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
`npm run test`

## License
MIT