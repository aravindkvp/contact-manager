import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('contact');
    },
    setupController(controller,model){
        controller.set('contact',JSON.parse(JSON.stringify(model)))
        this._super(...arguments);
    },
    actions:{
        willTransition(){
            if(this.controller.model.id == null){
                this.controller.model.destroyRecord();
            }
        },
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
        },
        
    },

    //To remove the clearValues Method
    //To validate values in contact Model
    
    
});
