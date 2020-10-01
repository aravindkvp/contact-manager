import Controller from '@ember/controller';

export default Controller.extend({
    title: 'Edit Contact',

    setContactValues(){
        this.set('contact',JSON.parse(JSON.stringify(this.model)));
    },
    setModelValues(){
        Object.assign(this.model,this.contact);
    },
    check(){
        let flag = true;
        let message = '';
        
        if(this.contact.firstName.length > 20){
            flag = false;
            message = message + 'First Name must be less than 20 characters\n\n';
        }
        else if(this.contact.firstName.length == 0){
            flag = false;
            message = message + 'First Name must not be empty\n\n';
        }
        
        if(this.contact.lastName.length > 20 ){
            flag = false;
            message = message + 'Last Name must be less than 20 characters\n\n';
        }
        else if(this.contact.lastName.length == 0){
            flag = false;
            message = message + 'Last Name must not be empty\n\n';
        }
       

        this.set('contact.age',Number(this.contact.age));
        
        if(!Number.isInteger(this.contact.age) || this.contact.age<1 || this.contact.age>99){
            flag = false;
            message = message + 'Enter Valid Age\n\n';
        }

        let mobileRegx = /[6789][0-9]{9}$/;
        if(mobileRegx.test(this.contact.mobileNumber) == false){
            flag = false;
            message = message + 'Enter Valid Mobile Number\n\n';
        }
        
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(this.contact.emailID) == false){
            flag = false;
            message = message + 'Enter Valid EmailID\n\n';
        }

        if(!flag){
            alert(message);
        }

        return flag;
    },
});


