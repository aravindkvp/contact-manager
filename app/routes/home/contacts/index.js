import Route from '@ember/routing/route';

export default Route.extend({
   model(){
       return this.store.findAll('contact');
   },
   actions:{
       view(id){
            this.transitionTo('home.contacts.index.view-contact',id);
       },
   }
});
