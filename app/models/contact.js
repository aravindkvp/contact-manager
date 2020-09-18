import Model from '@ember-data/model';
import DS from 'ember-data';
import {computed} from '@ember/object'

export default Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    fullName: computed('firstName','lastName',function(){
        return this.firstName + " " + this.lastName;
    }),
    mobileNumber: DS.attr('number'),
    emailID: DS.attr('string'),
    age: DS.attr('number')
});
