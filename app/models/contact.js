import Model from '@ember-data/model';
import DS from 'ember-data';
import {computed} from '@ember/object'

export default Model.extend({
    firstName: DS.attr('string',{defaultValue:''}),
    lastName: DS.attr('string',{defaultValue:''}),
    fullName: computed('firstName','lastName',function(){
        return this.firstName + " " + this.lastName;
    }),
    mobileNumber: DS.attr('number',{defaultValue:''}),
    emailID: DS.attr('string',{defaultValue:''}),
    age: DS.attr('number',{defaultValue:''}),
    check(){
        let message = '';
        
        if(this.firstName.length > 20){
            message = message + 'First Name must be less than 20 characters\n\n';
        }
        else if(this.firstName.length == 0){
            message = message + 'First Name must not be empty\n\n';
        }
        
        if(this.lastName.length > 20 ){
            message = message + 'Last Name must be less than 20 characters\n\n';
        }
        else if(this.lastName.length == 0){
            message = message + 'Last Name must not be empty\n\n';
        }
       

        this.set('age',Number(this.age));
        
        if(!Number.isInteger(this.age) || this.age<1 || this.age>99){
            message = message + 'Enter Valid Age\n\n';
        }

        let mobileRegx = /[6789][0-9]{9}$/;
        if(mobileRegx.test(this.mobileNumber) == false){
            message = message + 'Enter Valid Mobile Number\n\n';
        }
        
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(this.emailID) == false){
            message = message + 'Enter Valid EmailID\n\n';
        }
        return message;
    }
});
