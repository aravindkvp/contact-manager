export default function() {
  this.namespace = '/api';

  this.get('/contacts/:id',function(schema,request){
    let contact = schema.contacts.find(request.params.id);
    return contact;
  });

  this.get('/contacts',function(schema){
    let obj = schema.contacts.all();
    return obj;
  });

  this.post('/contacts',function(schema,request){
    let attrs = JSON.parse(request.requestBody).contacts;
    return schema.contacts.create(attrs);
  });

  this.patch('/contacts/:id', function(schema, request) {
    let id = request.params.id;
    let attrs = this.normalizedRequestAttrs();
    return schema.contacts.find(id).update(attrs);
  });

  this.del('/contacts/:id', function(schema, request){
    let id = request.params.id;
    schema.contacts.find(id).destroy();
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
