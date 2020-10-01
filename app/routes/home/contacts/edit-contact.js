import Route from '@ember/routing/route';

export default Route.extend({
    templateName: 'home/contacts/new-contact',
    model({id}){
        let record =  this.store.findRecord('contact',id);
        this.set('currentRecord',record);
        return record;
    },
    setupController(controller,model){
      //  controller.set('contact',model);
        this._super(...arguments);
    },
    actions:{
        didTransition(){
            this.controller.setContactValues();
        },
        submit(){
            if(this.controller.check()){
                this.controller.setModelValues();
                this.currentRecord.then((contact)=> {
                    if(contact.get('hasDirtyAttributes')){
                        contact.save();
                    }
                });
                this.transitionTo('home.contacts.index.view-contact',this.currentRecord.get('id'));
            }
        }
    }
});
