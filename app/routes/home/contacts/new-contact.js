import Route from '@ember/routing/route';


export default Route.extend({

    setupController(controller,model){
        controller.clearValues();
        this._super(...arguments);
    },
    actions:{
        submit(){
            let controller = this.controller;
            if(controller.check()){
                let contact = this.store.createRecord('contact',controller.contact);
                contact.save().then((contact)=>{
                    this.transitionTo('home.contacts.index.view-contact',contact.id);
                });
                
            }
        },
        
    },
    
});
