# ember-pubsub

A simple pubsub mechanism for Ember.js

[![Build Status](https://travis-ci.org/GavinJoyce/ember-pubsub.svg)](https://travis-ci.org/GavinJoyce/ember-pubsub)

Questions? Ping me [@gavinjoyce](https://twitter.com/gavinjoyce)

## Installation

This is an Ember CLI addon, to install:

`npm install ember-pubsub --save`

## Usage Instructions

```javascript

import PubSub from 'ember-pubsub/pubsub';

var pubsub = PubSub.create();

pubsub.subscribe('sayHello', this, function(name) {
  console.log('hello ' + name);
});

pubsub.publish('sayHello', 'Alex'); // => hello Alex

pubsub.unsubscribe('sayHello');

```

## TODOs

* [ ] Tests

## Development Instructions

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.
