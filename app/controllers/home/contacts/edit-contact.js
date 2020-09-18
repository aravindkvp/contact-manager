import Controller from '@ember/controller';
import Contact from 'contacts/controllers/home/contacts/new-contact';

export default Contact.extend({
    title: 'Edit Contact',
    
    /*check(){
        let flag = true;
        
        if(this.model.firstName.length > 20 || this.model.firstName.length == 0){
            flag = false;
            this.set('model.firstName',null);
            this.set('placeHolder.firstName','Enter Valid First Name');
        }
        
        if(this.model.lastName.length > 20 || this.model.lastName.length == 0){
            flag = false;
            this.set('model.lastName',null);
            this.set('placeHolder.lastName','Enter Valid last Name');
        }
       

        this.set('model.age',Number(this.model.age));
        
        if(!Number.isInteger(this.model.age) || this.model.age<1 || this.model.age>99){
            flag = false;
            this.set('model.age',null);
            this.set('placeHolder.age','Enter Valid Age');
        }
        
        
        var mobileRegx = /[6789][0-9]{9}$/;
        if(mobileRegx.test(this.model.mobileNumber) == false){
            flag = false;
            this.set('model.mobileNumber',null);
            this.set('placeHolder.mobileNumber','Enter Valid Mobile Number');
        }
        
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(this.model.emailID) == false){
            flag = false;
            this.set('model.emailID',null);
            this.set('placeHolder.emailID','Enter valid Email ID');
        }

        return flag;
    },*/
});


