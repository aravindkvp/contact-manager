import Route from '@ember/routing/route';

export default Route.extend({
    model({id}){
        let record =  this.store.findRecord('contact',id);
        this.set('currentRecord',record);
        return record;
    },
    actions:{
        edit(){
            this.transitionTo('home.contacts.edit-contact',this.currentRecord.get('id'));
        },
        delete(){
            if(confirm('Do you want to delete this Contact?'+'\n\n ID: '
                +this.currentRecord.get('id')+'\n Name: '+this.currentRecord.get('firstName')
                    +' '+this.currentRecord.get('lastName'))){
                        
                this.currentRecord.then(function(contact){
                    contact.destroyRecord();
                });
                this.transitionTo('home.contacts');
            }
        }
    }
});
