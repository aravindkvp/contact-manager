import Controller from '@ember/controller';

const Contact =  Controller.extend({
    contact:{
        firstName: '',
        lastName: '',
        age: null,
        emailID: null,
        mobileNumber: null,
        placeHolder:{
            firstName: null,
            lastName: null,
            age: null,
            emailID: null,
            mobileNumber: null,
        }
    },
    title: null,
    check(){
        let flag = true;
        
        if(this.contact.firstName.length > 20 || this.contact.firstName.length == 0){
            flag = false;
            this.set('contact.firstName',null);
            this.set('contact.placeHolder.firstName','Enter Valid First Name');
        }
        
        if(this.contact.lastName.length > 20 || this.contact.lastName.length == 0){
            flag = false;
            this.set('contact.lastName',null);
            this.set('contact.placeHolder.lastName','Enter Valid last Name');
        }
       

        this.set('contact.age',Number(this.contact.age));
        
        if(!Number.isInteger(this.contact.age) || this.contact.age<1 || this.contact.age>99){
            flag = false;
            this.set('contact.age',null);
            this.set('contact.placeHolder.age','Enter Valid Age');
        }
        
        
        var mobileRegx = /[6789][0-9]{9}$/;
        if(mobileRegx.test(this.contact.mobileNumber) == false){
            flag = false;
            this.set('contact.mobileNumber',null);
            this.set('contact.placeHolder.mobileNumber','Enter Valid Mobile Number');
        }
        
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(this.contact.emailID) == false){
            flag = false;
            this.set('contact.emailID',null);
            this.set('contact.placeHolder.emailID','Enter valid Email ID');
        }

        return flag;
    },
    clearValues(){
        this.set('contact.firstName','');
        this.set('contact.lastName','');
        this.set('contact.age','');
        this.set('contact.mobileNumber','');
        this.set('contact.emailID','');
        this.set('contact.placeHolder.firstName','');
        this.set('contact.placeHolder.lastName','');
        this.set('contact.placeHolder.age','');
        this.set('contact.placeHolder.mobileNumber','');
        this.set('contact.placeHolder.emailID','');
    }
});

export default Contact;