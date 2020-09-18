import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/contacts/index/view-contact', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/contacts/index/view-contact');
    assert.ok(route);
  });
});
