import Route from '@ember/routing/route';
import Contact from 'contacts/routes/home/contacts/edit-contact';

export default Contact.extend({
    model(){
        return this.store.createRecord('contact');
    },
    actions:{
        willTransition(){
            if(this.controller.model.id == null){
                this.controller.model.destroyRecord();
            }
        },
    },

    //To remove the clearValues Method
    //To validate values in contact Model
    
    
});
