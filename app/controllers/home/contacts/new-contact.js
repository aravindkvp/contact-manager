import Controller from '@ember/controller';
const Contact =  Controller.extend({
    contact:{
        firstName: '',
        lastName: '',
        age: ' ',
        emailID: ' ',
        mobileNumber: ' ',
    },
    placeHolder:{
        firstName: ' ',
        lastName: ' ',
        age: ' ',
        emailID: ' ',
        mobileNumber: ' ',
    },
    title: "Add New Contact",
    check(){
        let flag = true;
        
        if(this.contact.firstName.length > 20 || this.contact.firstName.length == 0){
            flag = false;
            this.set('contact.firstName',null);
            this.set('placeHolder.firstName','Enter Valid First Name');
        }
        
        if(this.contact.lastName.length > 20 || this.contact.lastName.length == 0){
            flag = false;
            this.set('contact.lastName',null);
            this.set('placeHolder.lastName','Enter Valid last Name');
        }
       

        this.set('contact.age',Number(this.contact.age));
        
        if(!Number.isInteger(this.contact.age) || this.contact.age<1 || this.contact.age>99){
            flag = false;
            this.set('contact.age',null);
            this.set('placeHolder.age','Enter Valid Age');
        }

        var mobileRegx = /[6789][0-9]{9}$/;
        if(mobileRegx.test(this.contact.mobileNumber) == false){
            flag = false;
            this.set('contact.mobileNumber',null);
            this.set('placeHolder.mobileNumber','Enter Valid Mobile Number');
        }
        
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(this.contact.emailID) == false){
            flag = false;
            this.set('contact.emailID',null);
            this.set('placeHolder.emailID','Enter valid Email ID');
        }

        return flag;
    },
    clearValues(){
        this.set('contact.firstName','');
        this.set('contact.lastName','');
        this.set('contact.age','');
        this.set('contact.mobileNumber','');
        this.set('contact.emailID','');
        this.set('placeHolder.firstName','');
        this.set('placeHolder.lastName','');
        this.set('placeHolder.age','');
        this.set('placeHolder.mobileNumber','');
        this.set('placeHolder.emailID','');
    },
    setContactValues(model){
        this.set('contact.firstName',model.firstName);
        this.set('contact.lastName',model.lastName);
        this.set('contact.age',model.age);
        this.set('contact.mobileNumber',model.mobileNumber);
        this.set('contact.emailID',model.emailID); 
    },
    setModelValues(){
        this.set('model.firstName',this.contact.firstName);
        this.set('model.lastName',this.contact.lastName);
        this.set('model.age',this.contact.age);
        this.set('model.mobileNumber',this.contact.mobileNumber);
        this.set('model.emailID',this.contact.emailID); 
    }
    
});

export default Contact;