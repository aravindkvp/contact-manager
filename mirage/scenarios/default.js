export default function( server ) {

  server.db.loadData({
    contacts:[
      {
        type:'contact',
        id: 1,
        firstName: 'Bruce',
        lastName: 'Wayne',
        age: 32,
        mobileNumber: 9457934753,
        emailID: 'brucewayne@gmail.com'
      },
      {
        type:'contact',
        id: 2,
        firstName: 'John',
        lastName: 'Wick',
        age: 45,
        mobileNumber: 8399472538,
        emailID: 'johnwick@gmail.com'
      },
      {
        type:'contact',
        id: 3,
        firstName: 'John',
        lastName: 'Watson',
        age: 37,
        mobileNumber: 7434290447,
        emailID: 'johnwatson@gmail.com'
      },
      {
        type:'contact',
        id: 4,
        firstName: 'Clark',
        lastName: 'Kent',
        age: 28,
        mobileNumber: 8344937426,
        emailID: 'clarkkent@gmail.com'
      },
      {
        type:'contact',
        id: 5,
        firstName: 'Bruce',
        lastName: 'Wayne',
        age: 32,
        mobileNumber: 9457934753,
        emailID: 'brucewayne@gmail.com'
      },
      {
        type:'contact',
        id: 6,
        firstName: 'John',
        lastName: 'Wick',
        age: 45,
        mobileNumber: 8399472538,
        emailID: 'johnwick@gmail.com'
      },
      {
        type:'contact',
        id: 7,
        firstName: 'John',
        lastName: 'Watson',
        age: 37,
        mobileNumber: 7434290447,
        emailID: 'johnwatson@gmail.com'
      },
      {
        type:'contact',
        id: 8,
        firstName: 'Clark',
        lastName: 'Kent',
        age: 28,
        mobileNumber: 8344937426,
        emailID: 'clarkkent@gmail.com'
      },
      
    ]
  });
}
