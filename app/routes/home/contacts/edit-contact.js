import Route from '@ember/routing/route';

export default Route.extend({
    templateName: 'home/contacts/new-contact',
    model({id}){
        return this.store.findRecord('contact',id); 
    },
    setupController(controller,model){
        controller.set('contact',JSON.parse(JSON.stringify(model)));
        this._super(...arguments);
    },
    actions:{
        submit(){
            let controller = this.controller;
            let validation = null;
            Object.assign(controller.model,controller.contact);
            validation = controller.model.check();
            if(validation.flag){
                controller.model.save().then(contact => {
                    this.transitionTo('home.contacts.index.view-contact',contact.id);
                });
            }
            else if(!validation.flag){
                alert(validation.message);
            }
        }
    }
    // redirect to the view-contact route after the promise is resolved
    //remove setContactValues,setModelValues,didTransition
    //Remove 'currentRecord' 
    
});
