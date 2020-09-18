import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home',function(){
    this.route('contacts', function() {
      this.route('index', function() {
        this.route('view-contact',{path: '/view-contact/:id'});
      });
      this.route('new-contact');
      this.route('edit-contact',{path: '/edit-contact/:id'});
    });
    this.route('about');
  });
});
