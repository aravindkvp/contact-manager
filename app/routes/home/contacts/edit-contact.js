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
            if(validation){
                alert(validation);
            }
            else{
                if(controller.model.get('hasDirtyAttributes')){
                    controller.model.save().then(contact => {
                        this.transitionTo('home.contacts.index.view-contact',contact);
                    });
                }
                else{
                    this.transitionTo('home.contacts.index.view-contact',controller.model);
                }
            }
        }
    }
    // redirect to the view-contact route after the promise is resolved
    //remove setContactValues,setModelValues,didTransition
    //Remove 'currentRecord' 
    
});
