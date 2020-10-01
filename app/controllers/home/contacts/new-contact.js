import Controller from '@ember/controller';
import Contact from 'contacts/controllers/home/contacts/edit-contact';
export default Contact.extend({
    contact:{
        firstName: '',
        lastName: '',
        age: '',
        mobileNumber: '',
        emailID: '',
    },
    title: "Add New Contact",
    
    clearValues(){
        for(let key in this.contact){
            this.set('contact.'+key,'');
        }
    },
});