import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

var application;

module('Acceptance | main', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('clicking on buttons adds proper log', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    click('.red');

    andThen(function(){
      findWithAssert('.log-red'); 

      click('.green');
      
      andThen(function(){
        findWithAssert('.log-green'); 

        click('.blue');
        
        andThen(function(){
          findWithAssert('.log-blue'); 
        });
      });
    });
  });
});
